# Moon Rollup Plugin

Rollup plugin for Moon.

## Usage

Use it as a Rollup plugin to compile your JavaScript files so that they can use the Moon view language.

```sh
npm install rollup-plugin-moon
```

```js
// rollup.config.js
import MoonPlugin from "rollup-plugin-moon";

export default {
	plugins: [
		MoonPlugin()
	]
};
```

## License

Licensed under the [MIT License](https://kbrsh.github.io/license) by [Kabir Shah](https://kabir.sh)
