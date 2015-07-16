# Angular directive for lazy load images

Simple, lightweight and easy to use. See the <a href="http://jsbin.com/wefidu">Demo</a>.

## Installation
Installing the plugin with bower:
```
bower install angular-img-lazy-load --save
```
or linking the minified source file manually:
```html
<script src="angular-img-lazy-load.min.js"></script>
```

Then you need to add the dependency to your angular module.
```js
angular.module('myModule', ['angular-img-lazy-load']);
```

## Usage
```html
<img src-lazy="https://placeimg.com/500/300"
```
Note: the directive needs the src attribute. All other attributes are simply copied from the directive to the generated img tag.

## Options
In your controller you can define the lazyOptions object to overwrite the default behaviour.
```

soon

```

