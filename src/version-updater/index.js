import { Manager } from './manager.js';
import { CLI } from './cli.js';
import { VERSION_TYPES } from './types.js';

function main() {
  try {
    const versionType = CLI.parseArgs();

    if (!Object.values(VERSION_TYPES).includes(versionType)) {
      CLI.showError('Por favor, informe um tipo de versão válido (major, minor ou patch).');
      return;
    }

    const versionManager = new Manager();
    const newVersion = versionManager.updateVersion(versionType);
    
    CLI.showSuccess(newVersion);
  } catch (error) {
    CLI.showError(error.message);
  }
}

main();