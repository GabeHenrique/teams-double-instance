import fs from "fs";

import path from "path";

import yargs from "yargs/yargs";

import {hideBin} from "yargs/helpers";


function updateVersion(versionType) {
  const packageJsonPath = path.join(__dirname, "package.json");
  const packageJson = require(packageJsonPath);

  let [major, minor, patch] = packageJson.version.split(".").map(Number);

  switch (versionType) {
    case "major":
      major += 1;
      minor = 0;
      patch = 0;
      break;
    case "minor":
      minor += 1;
      patch = 0;
      break;
    case "patch":
      patch += 1;
      break;
    default:
      console.error(
        "Tipo de versão inválido. Use 'major', 'minor' ou 'patch'.",
      );
      process.exit(1);
  }

  packageJson.version = `${major}.${minor}.${patch}`;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log(`Versão atualizada para: ${packageJson.version}`);
}

const argv = yargs(hideBin(process.argv)).argv;
const versionType = argv.versionType;
console.log("versionType", versionType);

if (!versionType) {
  console.error("Por favor, informe o tipo de versão (major, minor ou patch).");
  console.error("Exemplo: npm run update-version -- --version=major");
  process.exit(1);
}

updateVersion(versionType);
