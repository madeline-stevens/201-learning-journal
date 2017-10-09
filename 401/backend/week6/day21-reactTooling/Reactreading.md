
- webpack- webpack creates a graph of all of your application's dependencies.
  1. Entry(the first file to kick off your app):
  The webpack.config.js:
  `module.exports = {
  entry: './path/to/my/entry/file.js'
};`

  2. Output (tells webpack how to treat bundled code):
  webpack.config.js:

`const path = require('path');

module.exports = {
entry: './path/to/my/entry/file.js',
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'my-first-webpack.bundle.js'
}
};`

3. Loaders- Loaders in webpack transform these files into modules as they are added to your dependency graph.

4. Plugins- perform actions and custom functionality on "compilations" or "chunks" of your bundled modules.

- React:

`ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);`

- JSX:
  - Use it with React to describe what the UI should look like.
example:
`const element = <h1>Hello, world!</h1>;`

- Rendering Elements:
  - `<div id="root"></div>`
