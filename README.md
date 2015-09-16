# radium-plugin-friendly-pseudos

Radium plugin for easier to type pseudo classes. Converts nested style objects with keys like `onHover` to the format Radium expects, `:hover`. These are a bit more natural to type in JavaScript. Note that this will transform all keys that look like onSomething, but Radium only supports a limited subset of pseudos, namely `onActive`, `onFocus`, and `onHover`.

Example:

```js
{
  onActive: {color: 'blue'},
  onHover: {color: 'red'},
  onFocus: {color: 'yellow'}
}
```

Becomes

```js
{
  ':active': {color: 'blue'},
  ':hover': {color: 'red'},
  ':focus': {color: 'yellow'}
}
```

## Usage

`radium-plugin-friendly-pseudos` should be added directly before `Radium.Plugins.resolveInteractionStyles`. Radium plugins are setup by passing a config object to `@Radium`. Since you'll probably want to use this plugin everywhere you use Radium, you can create your own module with a configured version of Radium:

`ConfiguredRadium.js`

```js
var Radium = require('radium');
var friendlyPseudos = require('radium-plugin-friendly-pseudos');

function ConfiguredRadium(component) {
  return Radium({
    plugins: [
      Radium.Plugins.mergeStyleArray,
      Radium.Plugins.checkProps,
      Radium.Plugins.resolveMediaQueries,

      friendlyPseudos,

      Radium.Plugins.resolveInteractionStyles,
      Radium.Plugins.prefix,
      Radium.Plugins.checkProps,
    ]
  })(component);
}

module.exports = ConfiguredRadium;

```

Then you just use `@ConfiguredRadium` instead of `@Radium`. Or `ConfiguredRadium(MyComponent)` instead of `Radium(MyComponent)`.

```js
@ConfiguredRadium
class MyComponent extends Component {
  // ...
}
```
