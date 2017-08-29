(function() {
    'use strict';
    angular.module("frolicApp.app").service("homePageService", function($http) {
        var self = this;
        self.getData = function() {
            var data = {};
            return $http.get('./app-modules/homepage-module/services/categories.json')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    console.error('data error', response.status, response.data);
                })
                .finally(function() {
                    console.log("finally finished data");
                });
        };
    });
})();