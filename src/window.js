import {BrowserWindow, Notification, shell, app} from "electron";
import path from "path";
import {fileURLToPath} from "url";
import {APP_CONFIG, numberOfInstances} from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createInstance = (instance) => {

  const window = new BrowserWindow({
    icon: path.join(app.getAppPath(), "/icon.png"),
    webPreferences: {
      partition: `persist:teams-instance${instance}`,
      nodeIntegration: false,
    },
  });
  window.webContents.setUserAgent(APP_CONFIG.userAgent);
  window.maximize();
  window.loadURL(APP_CONFIG.url);

  setupWindowEvents(window);
};

const setupWindowEvents = (window) => {


  window.webContents.on("show-notification", (event, title, options) => {
    const notification = new Notification({
      title: title,
      body: options.body,
      silent: options.silent,
    });
    notification.show();
  });

  window.webContents.setWindowOpenHandler(({url}) => {
    shell.openExternal(url);
    return {action: "deny"};
  });
};

export const closeAllWindows = () => {
  BrowserWindow.getAllWindows().forEach((window) => window.close());
};

export const createWindows = () => {
  for (let i = 1; i <= numberOfInstances; i++) {
    createInstance(`-${i}`);
  }
};