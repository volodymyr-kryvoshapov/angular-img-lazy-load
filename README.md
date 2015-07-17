# Angular directive for lazy load images

Simple, lightweight and easy to use. See the <a href="http://jsbin.com/wefidu">Demo</a>.

## Installation
Installing through bower:
```
bower install angular-img-lazy-load --save
```

Add dependency to angular module.
```js
angular.module('myModule', ['img-lazy-load']);
```

## Usage
Simply add directive to yor image instead src attribute:
```html
<img src-lazy="https://placeimg.com/500/300">
```
Note: if you need loader: simply add it to image src attr.

## Options
Define constant in the main file of your app in order to overwrite the **default** behaviour.

**tolerance** - load images beforehand
**detectElement** - add css to img: "min-width: 1px; min-height: 1px" in order to be detected by element.inViewport() function in case if element truly visible for user
```js
angular.module('myModule', ['img-lazy-load'])
  .constant('imgLazyLoadConf', {
      tolerance: 200,
      detectElement: true
  });
```

