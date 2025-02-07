import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Manager {
  constructor() {
    this.packageJsonPath = path.join(__dirname, '../../package.json');
  }

  readPackageJson() {
    const packageData = fs.readFileSync(this.packageJsonPath, 'utf8');
    return JSON.parse(packageData);
  }

  writePackageJson(packageJson) {
    fs.writeFileSync(
      this.packageJsonPath, 
      JSON.stringify(packageJson, null, 2)
    );
  }

  updateVersion(versionType) {
    const packageJson = this.readPackageJson();
    const [major, minor, patch] = packageJson.version.split('.').map(Number);
    
    const newVersion = this.calculateNewVersion(versionType, major, minor, patch);
    if (!newVersion) {
      throw new Error(`Tipo de versão inválido. Use 'major', 'minor' ou 'patch'.`);
    }

    packageJson.version = newVersion;
    this.writePackageJson(packageJson);
    
    return newVersion;
  }

  calculateNewVersion(versionType, major, minor, patch) {
    switch (versionType) {
      case 'major':
        return `${major + 1}.0.0`;
      case 'minor':
        return `${major}.${minor + 1}.0`;
      case 'patch':
        return `${major}.${minor}.${patch + 1}`;
      default:
        return null;
    }
  }
}