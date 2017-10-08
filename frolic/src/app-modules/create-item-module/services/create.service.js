(function() {
    'use strict';
    angular.module("frolicApp.app").service("createService", ["$http", "ENDPOINT_CONSTANTS", "Upload", function($http, ENDPOINT_CONSTANTS, Upload) {
        var self = this;
        self.createItem = function(itemData) {
            return $http.post(ENDPOINT_CONSTANTS.API_DOMAIN + "items/add", itemData)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    console.error("data error", response.message);
                })
                .finally(function() {
                    console.log("finally finished data");
                });
        };
        self.uploadPic = function(file) {
            console.log("picture" + file);
            //itemData.pictureName = pictureName;
            return Upload.upload({
                url: ENDPOINT_CONSTANTS.API_DOMAIN + "upload",
                data: { file: file }
            });
        };
    }]);
})();