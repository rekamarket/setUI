const path = require('path');
const fs = require('fs');

// Kill me
const dir = __dirname.slice(0, -('scripts'.length + 1));

const markdownPlugin = {
  name: 'markdown',

  setup(build) {
    build.onResolve({ filter: /.+\.js$/ }, async (args) => {
      const docsSrc = await fs.promises.readFile(dir + args.path.slice(2), 'utf8');

      const files = docsSrc
        .split('\n')
        .map((e) => e.match(/(?<=.+from \").+(?=\";)/g))
        .map((e) => (Array.isArray(e) ? e[0] : false))
        .filter(Boolean)
        .map((e) => e.replace(/\.js$/, '.md.js'))
        .map((e) => e.replace(/^\./, '../src'));

      for (const file of files) {
        const address = dir + file.slice(2);

        if (fs.existsSync(address)) {
          import(dir + file.slice(2)).then(async ({ make, displayName, parentName }) => {
            if (!fs.existsSync(`${dir}/docs`)) {
              fs.mkdirSync(`${dir}/docs`);
            }

            if (parentName) {
              if (!fs.existsSync(`${dir}/docs/${parentName}`)) {
                fs.mkdirSync(`${dir}/docs/${parentName}`);
              }
              const name = `${dir}/docs/${parentName}/${displayName}.md`;
              if (fs.existsSync(name)) {
                fs.promises.rm(name);
              }
              await fs.promises.writeFile(name, make, {
                encoding: 'utf8',
                // flag: 'r+',
              });
            } else {
              if (!fs.existsSync(`${dir}/docs/${displayName}`)) {
                await fs.promises.mkdir(`${dir}/docs/${displayName}`);
              }

              await fs.promises.writeFile(`${dir}/docs/${displayName}/${displayName}.md`, make, {
                encoding: 'utf8',
                // flag: 'r+',
              });
            }

            return { contents: '' };
          });
        } else {
          console.error(`no file for ${file}`);
        }
      }

      return { path: dir + args.path.slice(2) };
    });
  },
};

require('esbuild').build({
  entryPoints: ['../src/index.js'],
  format: 'esm',
  target: 'es6',
  write: false,
  plugins: [markdownPlugin],
});
