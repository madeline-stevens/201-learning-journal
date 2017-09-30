
- html plugin-  html to js
- extracttextplugin- reading in css files and reading in those css static files

- devtool: 'source-map'(we see this when we use dev tools)
- entry: absolute path to this file, main.js
- output:- where should i put this build? (if a destiantion doesnt exist, webpack will make one), creates a new hash (similar to a git hash),

- plugins array- think of them as middleware
  - adapt some code to some new stuff to add it to the build pack
    - new htmlplguin
    - new extractextPlugin

- module (aka loaders)
  - how we interpret our js, font, images and transpile them down into javascript
