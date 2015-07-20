(function (angular) {
    'use strict';

    angular.element.prototype.isVisible = function() {
        var element = this[0];
        return element.offsetWidth > 0 && element.offsetHeight > 0;
    };

    angular.element.prototype.inViewport = function(tolerance) {
        var element = this[0];
        var rect = element.getBoundingClientRect();

        return (
            rect.top >= 0 - tolerance &&
                rect.left >= 0 - tolerance &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + tolerance &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) + tolerance
            );
    };

    angular.module('img-lazy-load', [])
        .constant('imgLazyLoadConf', {
            tolerance: 200,
            detectElement: true
        })

        .directive('srcLazy', ['imgLazyLoadConf', function(conf) {
            var imagesToLazyLoad = [];
            var isLoading = null;

            function detectElement(element) {
                if (!element.css('min-width') || element.css('min-width') === '0px') {
                    element.css("min-width", '1px');
                }
                if (!element.css('min-height') || element.css('min-height') === '0px') {
                    element.css("min-height", '1px');
                }
            }

            function loadImages() {
                angular.forEach(imagesToLazyLoad, function(element, key) {
                    if (element.isVisible() && element.inViewport(conf.tolerance)) {
                        element.attr('src', element.attr('src-lazy'));
                        imagesToLazyLoad.splice(key, 1);
                    }
                });

                if (imagesToLazyLoad.length === 0) {
                    clearInterval(isLoading);
                }
            }

            return {
                restrict: 'A',
                link: function(scope, element, attributes) {
                    if (conf.detectElement) {
                        detectElement(element);
                    }
                    imagesToLazyLoad.push(element);
                    clearInterval(isLoading);
                    isLoading = setInterval(function() {
                        loadImages();
                    }, 50);
                }
            };
        }]);
})(angular);