# Angular directive for lazy load images

Simple, lightweight and easy to use. See the <a href="http://jsbin.com/wefidu">Demo</a>.

## Installation
Installing through bower:
```
bower install angular-img-lazy-load --save
```

Add dependency to angular module.
```js
angular.module('myModule', ['angular-img-lazy-load']);
```

## Usage
Simply add directive to yor image instead src attribute:
```html
<img src-lazy="https://placeimg.com/500/300"
```
Note: if you need loader: simply add it to image src attr.

## Options
In your controller you can define the lazyOptions object to overwrite the default behaviour.
```

soon

```

