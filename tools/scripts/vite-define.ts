import {execSync} from 'node:child_process';

export function getShortHash() {
  try {
    return execSync('git describe --always').toString().trim();
  } catch (error) {
    return 'No git commit hash available';
  }
}

export function viteDefineConfig(packageJson: {version: string}) {
  return {
    'import.meta.env.COMMIT': `'${getShortHash()}'`,
    'import.meta.env.VERSION': `'${packageJson.version}'`,
  };
}
