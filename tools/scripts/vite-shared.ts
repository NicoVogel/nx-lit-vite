import {execSync} from 'node:child_process';

function getShortHash() {
  try {
    return execSync('git describe --always').toString().trim();
  } catch (error) {
    return 'No git commit hash available';
  }
}

function viteDefineConfig(packageJson: {version: string}) {
  return {
    'import.meta.env.COMMIT': `'${getShortHash()}'`,
    'import.meta.env.VERSION': `'${packageJson.version}'`,
  };
}

export function getViteSharedConfig(packageJson: {version: string}) {
  return {
    define: viteDefineConfig(packageJson),
  };
}
