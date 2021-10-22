const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin');
const { dependencies = {}, peerDependencies = {} } = require('../package.json');
const { Generator } = require('npm-dts');

require('esbuild').build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  plugins: [vanillaExtractPlugin()],
  outfile: './dist/index.js',
  // outdir: 'dist',
  format: 'esm',
  inject: ['./scripts/inject.js'],
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
}).catch(() => process.exit(1))

new Generator({
  entry: './src/index.ts',
  output: 'dist/index.d.ts',
}).generate()
