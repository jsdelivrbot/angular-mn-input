[![npm version](https://badge.fury.io/js/angular-mn-input.svg)](https://badge.fury.io/js/angular-mn-input)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-input.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-input)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)  

# angular-mn-input

An angular directive to [mn-input](https://github.com/minimalist-components/mn-input)

See the [demo](https://minimalist-components.github.io/mn-input)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-input/master/preview.gif)](https://minimalist-components.github.io/angular-mn-input/)

### Install

```sh
npm install --save angular-mn-input
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/angular-mn-input/tree/master/dist) with your preferred tool.

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

