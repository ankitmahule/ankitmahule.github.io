(function() {
    'use strict';
    angular.module("frolicApp.app").controller("deleteController", ["$window", "$rootScope", function($window, $rootScope) {
        var self = this;
        $rootScope.showCategoryLink = false;
        self.goBack = function() {
            $window.history.back();
        }
    }]);
})();