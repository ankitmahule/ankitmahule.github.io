(function() {
    'use strict';
    angular.module("frolicApp.app").service("viewService", ["$http", "ENDPOINT_CONSTANTS", function($http, ENDPOINT_CONSTANTS) {
        var self = this;
        self.getItemDetails = function(itemId) {
            var data = {};
            return $http.get(ENDPOINT_CONSTANTS.API_DOMAIN + "items/" + itemId)
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