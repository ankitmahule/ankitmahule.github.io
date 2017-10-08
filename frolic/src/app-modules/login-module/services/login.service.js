(function() {
    'use strict';
    angular.module("frolicApp.app").service("loginService", ["$http", "ENDPOINT_CONSTANTS", function($http, ENDPOINT_CONSTANTS) {
        var self = this;
        self.validateUser = function(userData) {
            return $http.post(ENDPOINT_CONSTANTS.API_DOMAIN + "login", userData)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    console.error('data error', response.message);
                })
                .finally(function() {
                    console.log("finally finished data");
                });
        };
    }]);
})();