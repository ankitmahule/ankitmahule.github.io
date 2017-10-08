(function() {
    'use strict';
    angular.module("frolicApp.app").controller("loginController", ["loginService", "$rootScope", "$window", function(loginService, $rootScope, $window) {
        var self = this;
        $rootScope.showCategoryLink = false;
        self.responseMessage = "";
        self.responseCode = null;
        self.loginUser = function(user) {
            loginService.validateUser(user).then(function(response) {
                if (angular.isDefined(response)) {
                    self.responseMessage = response.message;
                    self.responseCode = response.code;
                } else {
                    self.responseMessage = "Some unexpected error occurred";
                    self.responseCode = "7864";
                }
            });
        };
    }]);
})();