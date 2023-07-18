const { app, BrowserWindow } = require("electron");
const path = require("path");
let splash;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

app.on("ready", () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 875,
    minWidth: 500,
    height: 675,
    minHeight: 500,
    alwaysOnTop: true,
    show: false,
    icon: __dirname + "../imgs/SC.ico",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      devTools: true,
    },
  });
  splash = new BrowserWindow({
    width: 400,
    height: 400,
    frame: false,
    alwaysOnTop: true,
  });
  splash.loadFile(path.join(__dirname, "../html/splash.html"));
  splash.setIcon(path.join(__dirname, "../imgs/icon.png"));

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../html/index.html"));
  mainWindow.setIcon(path.join(__dirname, "../imgs/icon.png"));

  mainWindow.once("ready-to-show", () => {
    setTimeout(function () {
      splash.destroy();
      mainWindow.show();
    }, 5000);
  });
});
