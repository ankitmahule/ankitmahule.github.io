(function() {
    'use strict';
    angular.module("frolicApp.app").controller("homePageController", function(homePageService) {
        var self = this;
        self.categories = [];
        self.items = [];
        self.filters = {
            catId: "",
            catName: "All"
        };

        function init() {
            self.getData();
        };
        self.getData = function() {
            homePageService.getData().then(function(data) {
                if (angular.isDefined(data)) {
                    self.categories = data.categories;
                    self.items = data.items;
                }
            });
        };
        self.getItemsByCategory = function(id, name) {
            self.filters.catId = id;
            self.filters.catName = name;
        }
        init();
    });
})();