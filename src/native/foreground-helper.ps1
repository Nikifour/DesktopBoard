param()

$ErrorActionPreference = "Stop"

$typeDefinition = @"
using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;

public struct RECT {
  public int Left;
  public int Top;
  public int Right;
  public int Bottom;
}

public struct MONITORINFO {
  public int cbSize;
  public RECT rcMonitor;
  public RECT rcWork;
  public int dwFlags;
}

public class ForegroundWindowInfo {
  public bool Ok { get; set; }
  public string WindowHandle { get; set; }
  public string ClassName { get; set; }
  public string ProcessName { get; set; }
  public bool IsDesktop { get; set; }
  public bool IsFullscreen { get; set; }
  public bool IsPrimaryMonitor { get; set; }
}

public static class DesktopBoardForegroundInterop {
  private const uint MONITOR_DEFAULTTONEAREST = 2;
  private const int MONITORINFOF_PRIMARY = 1;

  [DllImport("user32.dll")]
  private static extern IntPtr GetForegroundWindow();

  [DllImport("user32.dll", SetLastError = true)]
  private static extern bool IsWindowVisible(IntPtr hWnd);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern bool IsIconic(IntPtr hWnd);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern bool GetWindowRect(IntPtr hWnd, out RECT lpRect);

  [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
  private static extern int GetClassName(IntPtr hWnd, StringBuilder lpClassName, int nMaxCount);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint processId);

  [DllImport("user32.dll", SetLastError = true)]
  private static extern IntPtr MonitorFromWindow(IntPtr hWnd, uint dwFlags);

  [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
  private static extern bool GetMonitorInfo(IntPtr hMonitor, ref MONITORINFO lpmi);

  private static string GetClassNameSafe(IntPtr hWnd) {
    if (hWnd == IntPtr.Zero) {
      return "";
    }

    var buffer = new StringBuilder(256);
    int written = GetClassName(hWnd, buffer, buffer.Capacity);
    return written > 0 ? buffer.ToString() : "";
  }

  private static string GetProcessNameSafe(IntPtr hWnd) {
    if (hWnd == IntPtr.Zero) {
      return "";
    }

    try {
      uint processId;
      GetWindowThreadProcessId(hWnd, out processId);
      if (processId == 0) {
        return "";
      }

      return Process.GetProcessById((int)processId).ProcessName ?? "";
    } catch {
      return "";
    }
  }

  private static bool CoversBounds(RECT rect, RECT bounds, int tolerance) {
    return Math.Abs(rect.Left - bounds.Left) <= tolerance
      && Math.Abs(rect.Top - bounds.Top) <= tolerance
      && Math.Abs(rect.Right - bounds.Right) <= tolerance
      && Math.Abs(rect.Bottom - bounds.Bottom) <= tolerance;
  }

  private static bool IsDesktopClass(string className, string processName) {
    if (!string.Equals(processName, "explorer", StringComparison.OrdinalIgnoreCase)) {
      return false;
    }

    return string.Equals(className, "Progman", StringComparison.OrdinalIgnoreCase)
      || string.Equals(className, "WorkerW", StringComparison.OrdinalIgnoreCase)
      || string.Equals(className, "SHELLDLL_DefView", StringComparison.OrdinalIgnoreCase)
      || string.Equals(className, "SysListView32", StringComparison.OrdinalIgnoreCase)
      || string.Equals(className, "Shell_TrayWnd", StringComparison.OrdinalIgnoreCase)
      || string.Equals(className, "Windows.UI.Core.CoreWindow", StringComparison.OrdinalIgnoreCase);
  }

  public static ForegroundWindowInfo InspectForeground() {
    IntPtr hWnd = GetForegroundWindow();
    string className = GetClassNameSafe(hWnd);
    string processName = GetProcessNameSafe(hWnd);
    bool isDesktop = IsDesktopClass(className, processName);
    bool isFullscreen = false;
    bool isPrimaryMonitor = false;

    if (hWnd != IntPtr.Zero && !isDesktop && IsWindowVisible(hWnd) && !IsIconic(hWnd)) {
      RECT rect;
      if (GetWindowRect(hWnd, out rect)) {
        IntPtr monitor = MonitorFromWindow(hWnd, MONITOR_DEFAULTTONEAREST);
        if (monitor != IntPtr.Zero) {
          var monitorInfo = new MONITORINFO();
          monitorInfo.cbSize = Marshal.SizeOf(typeof(MONITORINFO));
          if (GetMonitorInfo(monitor, ref monitorInfo)) {
            isPrimaryMonitor = (monitorInfo.dwFlags & MONITORINFOF_PRIMARY) == MONITORINFOF_PRIMARY;
            isFullscreen = CoversBounds(rect, monitorInfo.rcMonitor, 2) || CoversBounds(rect, monitorInfo.rcWork, 2);
          }
        }
      }
    }

    return new ForegroundWindowInfo {
      Ok = true,
      WindowHandle = hWnd == IntPtr.Zero ? "" : hWnd.ToInt64().ToString(),
      ClassName = className,
      ProcessName = processName,
      IsDesktop = isDesktop,
      IsFullscreen = isFullscreen,
      IsPrimaryMonitor = isPrimaryMonitor
    };
  }
}
"@

Add-Type -TypeDefinition $typeDefinition -Language CSharp

try {
  $result = [DesktopBoardForegroundInterop]::InspectForeground()
  [pscustomobject]@{
    ok = $result.Ok
    windowHandle = $result.WindowHandle
    className = $result.ClassName
    processName = $result.ProcessName
    isDesktop = $result.IsDesktop
    isFullscreen = $result.IsFullscreen
    isPrimaryMonitor = $result.IsPrimaryMonitor
  } | ConvertTo-Json -Compress
} catch {
  [pscustomobject]@{
    ok = $false
    error = $_.Exception.Message
  } | ConvertTo-Json -Compress
}
