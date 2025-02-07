import { app } from "electron";
import { setupMenu } from "../menu/menu.js";
import {createWindows} from "../window.js";
import {setupSession} from "../session.js";

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.whenReady().then(() => {
  setupSession();
  setupMenu();
  createWindows();
});
