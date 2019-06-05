# create-vue-package

[![NPM version](https://badgen.net/npm/v/create-vue-package)](https://npmjs.com/package/create-vue-package) [![NPM downloads](https://badgen.net/npm/dm/create-vue-package)](https://npmjs.com/package/create-vue-package) [![CircleCI](https://badgen.net/circleci/github/silvandiepen/create-vue-package/master)](https://circleci.com/gh/silvandiepen/create-vue-package/tree/master)

Scaffold a complete package fast, to make Vue components and directives publishable

## What it does

Create-vue-package sets up a publishable structure for Vue directives and components. Using rollup to create the umd, esm and browser versions of your package. Just add your code in the generated Vue file in src and run ‘npm run build’.

## Usage

1. Go to a (parent) folder where you want to create your package.
2. Run:

```bash
npx create-vue-package
```


3. Give your package a name, this name is also used for the main file.
4. Add your name to it.
5. Create it!
6. It will automatically install dependencies.
7. Go to the folder which you just created. 
8. Your are done! All you need to do is write your code and publish it!


## Testing your package

Once you’ve published your package to npm you can install it in your project. Use it how you want to use it.
When you want to update your package without all the time publishing it to npm you can “link” the package by..

- In your package: ‘npm run link’
- In your project: ‘npm run link [your package name]’

When you update the code in your package, don’t forget to run ‘npm run build’ to generated the latest dist version.

## Wishlist

- Make it easier to scaffold scoped packages.
- Check the package name for availability in the npm registry
- Add generic tests for the generated components and directives.
- Add tests for this generator
- Create ability to add multiple components into on package.
- Make it possible to setup more default structure for a type of component or directive.

## Contributing

Any help to make this package better is very welcome! So if you like this idea and have a good idea for refactor, update, write better docs or add features. Please feel free to contact me or just make a PR.

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**create-vue-package** © [Sil van Diepen](https://github.com/silvandiepen), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Sil van Diepen with help from contributors ([list](https://github.com/silvandiepen/create-vue-package/contributors)).

[github.com/silvandiepen](https://github.com/silvandiepen) · GitHub [@Sil van Diepen](https://github.com/silvandiepen) · Twitter [@silvandiepen](https://twitter.com/silvandiepen)
