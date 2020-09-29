# Utilitools 1.0.1

[![dependencies Status](https://david-dm.org/alanmarcos/utilitools/status.svg)](https://david-dm.org/alanmarcos/utilitools)
[![devDependencies Status](https://david-dm.org/alanmarcos/utilitools/dev-status.svg)](https://david-dm.org/alanmarcos/utilitools?type=dev)

## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= **10.13**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension on `src/manifest.json`.
5. Run `npm install` to install the dependencies.
6. Run `npm start`
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
8. Happy hacking.

## Intelligent Code Completion

This boilerplate supports chrome-specific intelligent code completion using [@types/chrome](https://www.npmjs.com/package/@types/chrome). For example:

![intellisense](https://lxieyang.github.io/static/chrome-extension-boilerplate-dev-intellisense-ed9e7c485d3eaf66417e5da4748e2c97.png)

## Packing

After the development of your extension run the command

```
$ NODE_ENV=production npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Resources:

- [Webpack documentation](https://webpack.js.org/concepts/)
- [Chrome Extension documentation](https://developer.chrome.com/extensions/getstarted)
- [Boilerplate documentation(https://github.com/lxieyang/chrome-extension-boilerplate-react)

---

Alan Marcos | [Website](https://alanmarcos.me)
