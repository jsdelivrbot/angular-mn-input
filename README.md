# angular-mn-input

An angular directive to [mn-input](https://github.com/darlanmendonca/mn-input)

<!-- See the [demo](http://codepen.io/darlanmendonca/full/NRNvRZ/) -->

### Install

With bower

```sh
bower install --save angular-mn-input
```

Or just download the main files ```dist/mn-input.css, dist/mn-input.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/mn-input.css">
<script src="path/to/mn-input.js"></script>
```

### Usage

And then, in your html, you can use the tag:

```html
<mn-input placeholder="Username" ng-model='username'></mn-input>
```

```js
angular.module('app', [
  'mn-input'
]);
```

For more details check docs [mn-input docs](https://github.com/darlanmendonca/mn-input).

