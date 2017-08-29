(function() {
    'use strict';
    angular.module("frolicApp.app").controller("deleteController", function($window) {
        var self = this;
        self.goBack = function() {
            $window.history.back();
        }
    });
})();