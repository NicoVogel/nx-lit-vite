/// <reference types="vitest" />
import {execSync} from 'child_process';
import * as path from 'path';

import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

import packageJson from './package.json';

export default defineConfig(async () => {
  const commitHash = getShortHash();
  return {
    cacheDir: '../../node_modules/.vite/components',

    plugins: [
      dts({
        entryRoot: 'src',
        tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
        skipDiagnostics: true,
      }),

      nxViteTsPaths(),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    define: {
      'import.meta.env.COMMIT': JSON.stringify(commitHash),
      'import.meta.env.VERSION': `'${packageJson.version}'`,
    },

    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points.
        entry: 'src/index.ts',
        name: 'components',
        fileName: 'index',
        // Change this to the formats you want to support.
        // Don't forget to update your package.json as well.
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: [],
      },
    },

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'node',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  };
});

function getShortHash() {
  try {
    return execSync('git describe --always').toString().trim();
  } catch (error) {
    return 'No git commit hash available';
  }
}
