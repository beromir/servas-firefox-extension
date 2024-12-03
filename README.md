# Servas Firefox Extension

**This version is no longer available. See the new extension [here](https://github.com/beromir/servas-extension).**

Add the current website to your [Servas](https://github.com/beromir/servas) instance directly from the browser.

## Installation

- Download the extension (.xpi file) from the releases page.
- Open the extensions page in Firefox (about:addons).
- Click on the settings icon on the right side.
- Click on `Install Add-on From File`.
- Select the downloaded extension.
- Add the extension to your Firefox browser.
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
