import { contextBridge, ipcRenderer, Notification } from "electron";

if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

contextBridge.exposeInMainWorld("electron", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
});
