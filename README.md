# Servas Firefox Extension

Add the current website to your [Servas](https://github.com/beromir/servas) instance directly from the browser.

## Installation

- Add the extension to your
  browser: https://addons.mozilla.org/firefox/downloads/file/4026544/d19dadc6b89c4bad95c3-1.0.xpi
- Open the profile menu in Servas and click on API Tokens.
- Create a new token with the `create` permission.
- Open the extension settings.
- Add the URL of your Servas instance (`https://your-servas-instance.com`).
- Add the API token.
- Click on `Save settings`.

## Development

```shell
npm install
```

```shell
npm run watch
```

## Generate extension files

```shell
npm run prod
```

The created files are located in the `dist` folder.
