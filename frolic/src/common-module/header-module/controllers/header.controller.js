(function() {
    'use strict';
    angular.module("frolicApp.common").controller("headerController", ["$window", "$rootScope", function($window, $rootScope) {

        var self = this;
        $rootScope.showCategoryLink = null;
        self.showMenu = null;

        function init() {
            self.checkWidth();
        };
        self.checkWidth = function() {
            if ($window.innerWidth < 768) {
                self.showMenu = true;
            } else {
                self.showMenu = false;
            }
        }
        init();
    }]);
})();