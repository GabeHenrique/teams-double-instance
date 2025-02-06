const fs = require("fs");
const path = require("path");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

// Função para atualizar a versão
function updateVersion(versionType) {
  const packageJsonPath = path.join(__dirname, "package.json");
  const packageJson = require(packageJsonPath);

  // Divide a versão atual em major, minor e patch
  let [major, minor, patch] = packageJson.version.split(".").map(Number);

  // Atualiza a versão com base no tipo (major, minor ou patch)
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

  // Atualiza a versão no package.json
  packageJson.version = `${major}.${minor}.${patch}`;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log(`Versão atualizada para: ${packageJson.version}`);
}

// Captura o argumento passado (major, minor ou patch)
const argv = yargs(hideBin(process.argv)).argv;
const versionType = argv.versionType;
console.log("versionType", versionType);

if (!versionType) {
  console.error("Por favor, informe o tipo de versão (major, minor ou patch).");
  console.error("Exemplo: npm run update-version -- --version=major");
  process.exit(1);
}

updateVersion(versionType);
