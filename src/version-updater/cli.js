import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export class CLI {
  static parseArgs() {
    const argv = yargs(hideBin(process.argv))
      .option('versionType', {
        alias: 'v',
        describe: 'Tipo de versão (major, minor ou patch)',
        type: 'string',
        demandOption: true
      })
      .help()
      .argv;

    return argv.versionType;
  }

  static showError(message) {
    console.error(message);
    console.error('Exemplo: npm run update-version -- --versionType=major');
    process.exit(1);
  }

  static showSuccess(version) {
    console.log(`Versão atualizada para: ${version}`);
  }
}