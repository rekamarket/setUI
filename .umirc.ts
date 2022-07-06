import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  base: '/setUI',
  publicPath: '/setUI/',
  resolve: {
    includes: ['docs', 'src'],
  },
  title: 'set-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: './.umi/package',

  alias: {
    '@rekamarket/set-ui': path.resolve(__dirname, './package/index.gen.js'),
  },
});
