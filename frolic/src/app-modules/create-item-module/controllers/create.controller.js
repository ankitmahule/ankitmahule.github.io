(function() {
    'use strict';
    angular.module("frolicApp.app").controller("createController", ["createService", "$scope", "$rootScope", "$window", "homePageService", function(createService, $scope, $rootScope, $window, homePageService) {
        var self = this;
        self.categories = [];
        self.responseMessage = "";
        self.responseCode = null;
        self.uploadPicResponse = "";
        self.uploadPicResponseCode = null;
        self.picFileName = "";
        $rootScope.showCategoryLink = false;
        self.itemData = {};

        /*
        @name init
        @params none
        @description initialize the controller
        */
        function init() {
            self.getCategories();
        }

        /*
        @name getCategories
        @params none
        @description gets all the categories
        */
        self.getCategories = function() {
            homePageService.getCategories().then(function(data) {
                if (angular.isDefined(data)) {
                    self.categories = data.categories;
                } else {
                    self.responseMessage = "Some unexpected error occurred";
                    self.responseCode = "7864";
                }
            });
        };

        /*
        @name createItem
        @params item
        @description creates new item
        */
        self.createItem = function(item) {
            self.itemData = item;
            self.itemData.pictureName = self.picFileName;
            console.log(self.itemData.pictureName);
            createService.createItem(self.itemData).then(function(response) {
                if (angular.isDefined(response)) {
                    self.responseMessage = response.message;
                    self.responseCode = response.code;
                    self.reset();
                } else {
                    self.responseMessage = "Some unexpected error occurred";
                    self.responseCode = "7864";
                }
            });
        };

        /*
        @name uploadPic
        @params file
        @description uploads image of item
        */
        self.uploadPic = function(file) {
            console.log(file);
            self.picFileName = file.name;
            createService.uploadPic(file).then(function(response) {
                if (angular.isDefined(response)) {
                    self.uploadPicResponse = response.data.message;
                    self.uploadPicResponseCode = response.data.code;
                }
            });
        };

        /*
        @name reset
        @params none
        @description to reset everything after creating input
        */
        self.reset = function(item) {
            $scope.createForm.$setPristine();
        };
        init();
    }]);
})();