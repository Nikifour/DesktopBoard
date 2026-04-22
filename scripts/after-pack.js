const path = require("path");

exports.default = async function afterPack(context) {
  if (context.electronPlatformName !== "win32") {
    return;
  }

  const { rcedit } = await import("rcedit");
  const executableName = `${context.packager.appInfo.productFilename}.exe`;
  const executablePath = path.join(context.appOutDir, executableName);
  const iconPath = path.join(context.packager.projectDir, "build", "icon.ico");
  const companyName = context.packager.appInfo.companyName || context.packager.appInfo.productName;
  const windowsVersion = context.packager.appInfo.getVersionInWeirdWindowsForm();

  await rcedit(executablePath, {
    icon: iconPath,
    "file-version": windowsVersion,
    "product-version": windowsVersion,
    "version-string": {
      CompanyName: companyName,
      FileDescription: context.packager.appInfo.description || context.packager.appInfo.productName,
      InternalName: context.packager.appInfo.productFilename,
      OriginalFilename: executableName,
      ProductName: context.packager.appInfo.productName
    }
  });
};
