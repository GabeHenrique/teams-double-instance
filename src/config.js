import {app} from 'electron';
import fs from 'fs';
import path from 'path';

const configPath = path.join(app.getAppPath(), '/config.json');

export const APP_CONFIG = {
  url: "https://teams.microsoft.com/v2/",
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  defaultInstances: 1,
};

export let numberOfInstances = APP_CONFIG.defaultInstances;

export const loadConfig = () => {
  if (fs.existsSync(configPath)) {
    const configData = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configData);
    numberOfInstances = config.numberOfInstances;
  }
};

export const saveConfig = () => {
  const config = { numberOfInstances };
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
};

export const setNumberOfInstances = (number) => {
  numberOfInstances = number;
  saveConfig();
};

loadConfig();