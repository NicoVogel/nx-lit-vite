import {viteDefineConfig} from './vite-define.js';

export function getViteSharedConfig(packageJson: {version: string}) {
  return {
    define: viteDefineConfig(packageJson),
  };
}
