import { session } from "electron";

export const setupSession = () => {
  session.defaultSession.setPermissionRequestHandler(
    (webContents, permission, callback) => {
      callback(permission === "notifications");
    },
  );
};
