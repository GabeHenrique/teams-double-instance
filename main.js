const {
  app,
  BrowserWindow,
  session,
  Notification,
  shell,
} = require("electron");

const firstInstance = "-1";
const secondInstance = "-2";
const url = "https://teams.microsoft.com/v2/";

const createInstance = (instance) => {
  const userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

  const window = new BrowserWindow({
    autoHideMenuBar: true,
    icon: `${__dirname}/icon.png`,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
      partition: `persist:teams-instance${instance}`,
    },
  });
  window.webContents.setUserAgent(userAgent);
  window.maximize();
  window.loadURL(url);

  window.webContents.on("did-fail-load", () => {
    console.error(
      `Failed to load Teams instance ${instance}: ${errorCode} - ${errorDescription}`,
    );
    window.reload();
  });

  window.webContents.on("show-notification", (event, title, options) => {
    const notification = new Notification({
      title: title,
      body: options.body,
      silent: options.silent,
    });
    notification.show();
  });

  window.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
};

const createWindows = () => {
  createInstance(firstInstance);
  createInstance(secondInstance);
};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler(
    (webContents, permission, callback) => {
      if (permission === "notifications") {
        callback(true);
      } else {
        callback(false);
      }
    },
  );
  createWindows();
});
