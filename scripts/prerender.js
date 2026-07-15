process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const React = require('react');
const { renderToString } = require('react-dom/server');

const sourceRoot = path.resolve(__dirname, '..', 'src');

for (const extension of ['.js', '.jsx']) {
  require.extensions[extension] = (module, filename) => {
    if (!filename.startsWith(sourceRoot)) {
      return module._compile(fs.readFileSync(filename, 'utf8'), filename);
    }

    const result = babel.transformFileSync(filename, {
      babelrc: false,
      configFile: false,
      presets: [[require.resolve('babel-preset-react-app'), { runtime: 'automatic' }]],
    });

    module._compile(result.code, filename);
  };
}

require.extensions['.css'] = () => {};

const App = require('../src/App').default;
const outputPath = path.resolve(__dirname, '..', 'build', 'index.html');
const html = fs.readFileSync(outputPath, 'utf8');
const rootStart = html.indexOf('<div id="root">');
const rootEnd = html.lastIndexOf('</div></body>');

if (rootStart === -1 || rootEnd === -1 || rootEnd < rootStart) {
  throw new Error('Could not find the root element in build/index.html');
}

const appHtml = renderToString(React.createElement(App));
const prerenderedRoot = `<div id="root" data-prerendered="true">${appHtml}</div>`;
const output = `${html.slice(0, rootStart)}${prerenderedRoot}${html.slice(rootEnd + 6)}`;

fs.writeFileSync(outputPath, output);
console.log('Prerendered the top page into build/index.html');
