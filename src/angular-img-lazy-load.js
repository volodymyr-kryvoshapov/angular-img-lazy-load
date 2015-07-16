(function (angular, $) {
    'use strict';

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

    angular.module('img-lazy-load', []).directive('srcLazy', [function() {
        var imagesToLazyLoad = [];
        var isLoading = null;

        function loadImages() {
            angular.forEach(imagesToLazyLoad, function(element, key) {
                if ($(element).is(':visible') && element.inViewport(200)) {
                    element.attr('src', element.attr('src-lazy'));
                    imagesToLazyLoad.splice(key, 1);
                }
            });

            if (imagesToLazyLoad.length == 0) {
                clearInterval(isLoading);
            }
        }

        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                imagesToLazyLoad.push(element);
                clearInterval(isLoading);
                isLoading = setInterval(function() {
                    loadImages();
                }, 50);
            }
        }
    }]);
})(angular, jQuery);