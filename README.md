[![Bower version](https://badge.fury.io/bo/angular-mn-input.svg)](https://badge.fury.io/bo/angular-mn-input)

# angular-mn-input

An angular directive to [mn-input](https://github.com/minimalist-components/mn-input)

See the [demo](http://codepen.io/darlanmendonca/full/akgXQq)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-input/master/sources/example/mn-input.gif)](http://codepen.io/darlanmendonca/full/akgXQq)

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

```js
// add dependency in you module
angular.module('app', [
  'mn-input'
]);
```

And then, in your html, you can use the tag:

```html
<mn-input placeholder="Username" ng-model='username'></mn-input>
```


For more details check docs [mn-input docs](https://github.com/minimalist-components/mn-input).

