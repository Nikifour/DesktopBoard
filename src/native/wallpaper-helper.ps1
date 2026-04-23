param(
  [Parameter(Mandatory = $true)]
  [ValidateSet("attach", "detach")]
  [string]$Action,

  [Parameter(Mandatory = $true)]
  [string]$WindowHandle
)

$ErrorActionPreference = "Stop"

$typeDefinition = @"
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;

public static class DesktopBoardWallpaperInterop {
  private const int GWL_STYLE = -16;
  private const long WS_CHILD = 0x40000000L;
  private const long WS_POPUP = 0x80000000L;
  private static readonly IntPtr HWND_TOP = IntPtr.Zero;
  private static readonly IntPtr HWND_BOTTOM = new IntPtr(1);
  private const uint SWP_NOSIZE = 0x0001;
  private const uint SWP_NOMOVE = 0x0002;
  private const uint SWP_NOZORDER = 0x0004;
  private const uint SWP_NOACTIVATE = 0x0010;
  private const uint SWP_FRAMECHANGED = 0x0020;
  private const uint SWP_SHOWWINDOW = 0x0040;
  private const uint SWP_NOOWNERZORDER = 0x0200;
  private const uint SMTO_NORMAL = 0x0000;
  private const uint PROGMAN_SPAWN_WORKERW = 0x052C;

  public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

  [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
  private static extern IntPtr FindWindow(string lpClassName, string lpWindowName);

  [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
  private static extern IntPtr FindWindowEx(IntPtr hWndParent, IntPtr hWndChildAfter, string lpszClass, string lpszWindow);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern bool EnumWindows(EnumWindowsProc lpEnumFunc, IntPtr lParam);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern IntPtr SetParent(IntPtr hWndChild, IntPtr hWndNewParent);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern IntPtr GetParent(IntPtr hWnd);

  [DllImport("user32.dll", SetLastError = true, EntryPoint = "GetWindowLongPtrW")]
  private static extern IntPtr GetWindowLongPtr64(IntPtr hWnd, int nIndex);

  [DllImport("user32.dll", SetLastError = true, EntryPoint = "GetWindowLongW")]
  private static extern int GetWindowLong32(IntPtr hWnd, int nIndex);

  [DllImport("user32.dll", SetLastError = true, EntryPoint = "SetWindowLongPtrW")]
  private static extern IntPtr SetWindowLongPtr64(IntPtr hWnd, int nIndex, IntPtr dwNewLong);

  [DllImport("user32.dll", SetLastError = true, EntryPoint = "SetWindowLongW")]
  private static extern int SetWindowLong32(IntPtr hWnd, int nIndex, int dwNewLong);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern IntPtr SendMessageTimeout(
    IntPtr hWnd,
    uint Msg,
    IntPtr wParam,
    IntPtr lParam,
    uint fuFlags,
    uint uTimeout,
    out IntPtr lpdwResult
  );

  [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
  private static extern int GetClassName(IntPtr hWnd, StringBuilder lpClassName, int nMaxCount);

  private static IntPtr GetWindowLongPtr(IntPtr hWnd, int nIndex) {
    if (IntPtr.Size == 8) {
      return GetWindowLongPtr64(hWnd, nIndex);
    }
    return new IntPtr(GetWindowLong32(hWnd, nIndex));
  }

  private static IntPtr SetWindowLongPtr(IntPtr hWnd, int nIndex, IntPtr value) {
    if (IntPtr.Size == 8) {
      return SetWindowLongPtr64(hWnd, nIndex, value);
    }
    return new IntPtr(SetWindowLong32(hWnd, nIndex, value.ToInt32()));
  }

  private static void ThrowLastError(string scope) {
    throw new InvalidOperationException(scope + " failed with Win32 error " + Marshal.GetLastWin32Error() + ".");
  }

  private static string GetClassNameSafe(IntPtr hWnd) {
    if (hWnd == IntPtr.Zero) {
      return "";
    }

    var buffer = new StringBuilder(256);
    int written = GetClassName(hWnd, buffer, buffer.Capacity);
    return written > 0 ? buffer.ToString() : "";
  }

  private static void UpdateWindowStyleForParenting(IntPtr hWnd, bool childMode) {
    long style = GetWindowLongPtr(hWnd, GWL_STYLE).ToInt64();
    long nextStyle = childMode
      ? ((style | WS_CHILD) & ~WS_POPUP)
      : ((style | WS_POPUP) & ~WS_CHILD);

    SetWindowLongPtr(hWnd, GWL_STYLE, new IntPtr(nextStyle));
    if (!SetWindowPos(
      hWnd,
      IntPtr.Zero,
      0,
      0,
      0,
      0,
      SWP_NOMOVE | SWP_NOSIZE | SWP_NOZORDER | SWP_NOACTIVATE | SWP_NOOWNERZORDER | SWP_FRAMECHANGED | SWP_SHOWWINDOW
    )) {
      ThrowLastError("SetWindowPos");
    }
  }

  private static bool HasShellView(IntPtr hWnd) {
    return FindWindowEx(hWnd, IntPtr.Zero, "SHELLDLL_DefView", null) != IntPtr.Zero;
  }

  private static void BringWindowToTopOfParent(IntPtr hWnd) {
    if (!SetWindowPos(
      hWnd,
      HWND_TOP,
      0,
      0,
      0,
      0,
      SWP_NOMOVE | SWP_NOSIZE | SWP_NOACTIVATE | SWP_NOOWNERZORDER | SWP_SHOWWINDOW
    )) {
      ThrowLastError("SetWindowPos");
    }
  }

  private static void SendWindowToBottomOfParent(IntPtr hWnd) {
    if (!SetWindowPos(
      hWnd,
      HWND_BOTTOM,
      0,
      0,
      0,
      0,
      SWP_NOMOVE | SWP_NOSIZE | SWP_NOACTIVATE | SWP_NOOWNERZORDER | SWP_SHOWWINDOW
    )) {
      ThrowLastError("SetWindowPos");
    }
  }

  private static void SendWindowBelowSibling(IntPtr hWnd, IntPtr sibling) {
    if (sibling == IntPtr.Zero) {
      SendWindowToBottomOfParent(hWnd);
      return;
    }

    if (!SetWindowPos(
      hWnd,
      sibling,
      0,
      0,
      0,
      0,
      SWP_NOMOVE | SWP_NOSIZE | SWP_NOACTIVATE | SWP_NOOWNERZORDER | SWP_SHOWWINDOW
    )) {
      ThrowLastError("SetWindowPos");
    }
  }

  private static string DescribeWindow(IntPtr hWnd) {
    string className = GetClassNameSafe(hWnd);
    if (string.IsNullOrWhiteSpace(className)) {
      className = "Unknown";
    }
    return className + (HasShellView(hWnd) ? ":shell-host" : ":blank");
  }

  private static IntPtr ResolveWallpaperParent() {
    IntPtr progman = FindWindow("Progman", null);
    if (progman == IntPtr.Zero) {
      throw new InvalidOperationException("Progman window not found.");
    }

    IntPtr sendResult;
    SendMessageTimeout(progman, PROGMAN_SPAWN_WORKERW, new IntPtr(0xD), IntPtr.Zero, SMTO_NORMAL, 1000, out sendResult);
    SendMessageTimeout(progman, PROGMAN_SPAWN_WORKERW, new IntPtr(0xD), new IntPtr(1), SMTO_NORMAL, 1000, out sendResult);

    var topWindows = new List<IntPtr>();
    EnumWindows(delegate (IntPtr topHandle, IntPtr lParam) {
      topWindows.Add(topHandle);
      return true;
    }, IntPtr.Zero);

    IntPtr shellHost = IntPtr.Zero;
    int shellHostIndex = -1;
    for (int i = 0; i < topWindows.Count; i++) {
      if (HasShellView(topWindows[i])) {
        shellHost = topWindows[i];
        shellHostIndex = i;
        break;
      }
    }

    if (shellHostIndex >= 0) {
      if (GetClassNameSafe(shellHost) == "Progman") {
        return shellHost;
      }

      for (int i = shellHostIndex + 1; i < topWindows.Count; i++) {
        IntPtr candidate = topWindows[i];
        if (GetClassNameSafe(candidate) == "WorkerW" && !HasShellView(candidate)) {
          return candidate;
        }
      }
    }

    foreach (IntPtr candidate in topWindows) {
      if (GetClassNameSafe(candidate) == "WorkerW" && !HasShellView(candidate)) {
        return candidate;
      }
    }

    if (shellHost != IntPtr.Zero) {
      return shellHost;
    }

    return progman;
  }

  public static string AttachToWallpaper(IntPtr hWnd) {
    IntPtr parent = ResolveWallpaperParent();
    IntPtr shellView = HasShellView(parent)
      ? FindWindowEx(parent, IntPtr.Zero, "SHELLDLL_DefView", null)
      : IntPtr.Zero;
    UpdateWindowStyleForParenting(hWnd, true);
    IntPtr currentParent = GetParent(hWnd);
    if (currentParent != parent) {
      IntPtr previousParent = SetParent(hWnd, parent);
      if (previousParent == IntPtr.Zero && Marshal.GetLastWin32Error() != 0) {
        ThrowLastError("SetParent");
      }
    }
    UpdateWindowStyleForParenting(hWnd, true);
    if (HasShellView(parent)) {
      SendWindowBelowSibling(hWnd, shellView);
    } else {
      BringWindowToTopOfParent(hWnd);
    }
    return DescribeWindow(parent);
  }

  public static string DetachFromWallpaper(IntPtr hWnd) {
    IntPtr currentParent = GetParent(hWnd);
    if (currentParent != IntPtr.Zero) {
      IntPtr previousParent = SetParent(hWnd, IntPtr.Zero);
      if (previousParent == IntPtr.Zero && Marshal.GetLastWin32Error() != 0) {
        ThrowLastError("SetParent");
      }
      UpdateWindowStyleForParenting(hWnd, false);
      return DescribeWindow(previousParent);
    }

    UpdateWindowStyleForParenting(hWnd, false);
    return "";
  }
}
"@

Add-Type -TypeDefinition $typeDefinition -Language CSharp

try {
  $parsedHandle = [UInt64]::Parse($WindowHandle)
  $hwnd = [IntPtr]::new([Int64]$parsedHandle)
  $parentClass = if ($Action -eq "attach") {
    [DesktopBoardWallpaperInterop]::AttachToWallpaper($hwnd)
  } else {
    [DesktopBoardWallpaperInterop]::DetachFromWallpaper($hwnd)
  }

  [pscustomobject]@{
    ok = $true
    action = $Action
    parentClass = $parentClass
  } | ConvertTo-Json -Compress
} catch {
  [pscustomobject]@{
    ok = $false
    action = $Action
    error = $_.Exception.Message
  } | ConvertTo-Json -Compress
}
