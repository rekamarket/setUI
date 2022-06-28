const path = require('path');
const fs = require('fs');

// Kill me
const dir = __dirname.slice(0, -('scripts'.length + 1));

const markdownPlugin = {
  name: 'markdown',

  setup(build) {
    build.onLoad({ filter: /^.*\.md\.js$/ }, async (args) => {
      import(args.path).then(async ({ make, displayName, parentName }) => {
        if (parentName) {
          if (!fs.existsSync(`${dir}/docs/${parentName}`)) {
            fs.mkdirSync(`${dir}/docs/${parentName}`);
          }
          await fs.promises.writeFile(`${dir}/docs/${parentName}/${displayName}.md`, make);
        } else {
          await fs.promises.mkdir(`${dir}/docs/${displayName}`);
          await fs.promises.writeFile(`${dir}/docs/${displayName}/${displayName}.md`, make);
        }

        return { contents: '' };
      });
    });
  },
};

const i = 27;
const data = [
  './src/containers/Banner/Horizontal/Set/BannerHorizontal.md.js', //  0
  './src/containers/Banner/Vertical/Set/BannerVertical.md.js', //  1
  './src/containers/Limit/Set/Limit.md.js', //  2

  './src/litons/Default/a/ButtonLink.md.js', //  3
  './src/litons/Default/button/Button.md.js', //  4
  './src/litons/Sber/a/SberButtonLink.md.js', //  5
  './src/litons/Sber/button/SberButton.md.js', //  6

  './src/typography/Heading/Set/Heading.md.js', //  7
  './src/typography/Heading/SubSets/h1/H1.md.js', //  8
  './src/typography/Heading/SubSets/h2/H2.md.js', //  9
  './src/typography/Heading/SubSets/h3/H3.md.js', // 10
  './src/typography/Heading/SubSets/h4/H4.md.js', // 11
  './src/typography/Heading/SubSets/h5/H5.md.js', // 12
  './src/typography/Heading/SubSets/h6/H6.md.js', // 13

  './src/typography/Link/SubSets/a/A.md.js', // 14

  './src/typography/Text/Set/Text.md.js', // 15
  './src/typography/Text/SubSets/abbr/Abbr.md.js', // 16
  './src/typography/Text/SubSets/b/B.md.js', // 17
  './src/typography/Text/SubSets/data/Data.md.js', // 18
  './src/typography/Text/SubSets/dd/Dd.md.js', // 19
  './src/typography/Text/SubSets/dt/Dt.md.js', // 20
  './src/typography/Text/SubSets/i/I.md.js', // 21
  './src/typography/Text/SubSets/small/Small.md.js', // 22
  './src/typography/Text/SubSets/span/Span.md.js', // 23
  './src/typography/Text/SubSets/strong/Strong.md.js', // 24

  './src/typography/TextContainer/Set/TextContainer.md.js', // 25
  './src/typography/TextContainer/SubSets/p/P.md.js', // 26
];

require('esbuild').build({
  entryPoints: [data[i]],
  format: 'esm',
  target: 'es6',
  write: false,
  plugins: [markdownPlugin],
});
