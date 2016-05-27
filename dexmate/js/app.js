var app = angular.module("myapp", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
            , controller: "homeController"
        })
        .when("/catalog", {
            templateUrl: "templates/catalog.html"
            , controller: "catalogController"
        })
        .when("/register", {
            templateUrl: "templates/register.html"
            , controller: "registerController"
        })

        .when("/login", {
            templateUrl: "templates/login.html"
            , controller: "loginController"
        })
        .otherwise({
            redirectTo: "templates/home.html"
        });

});
app.controller("homeController", function ($scope) {
    $scope.load = function () {
        $('#myCarousel').carousel({
            interval: 4000
        });

        // handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
            var id_selector = $(this).attr("id");
            var id = id_selector.substr(id_selector.length - 1);
            id = parseInt(id);
            $('#myCarousel').carousel(id);
            $('[id^=carousel-selector-]').removeClass('selected');
            $(this).addClass('selected');
        });

        // when the carousel slides, auto update
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            var id = $('.item.active').data('slide-number');
            id = parseInt(id);
            $('[id^=carousel-selector-]').removeClass('selected');
            $('[id=carousel-selector-' + id + ']').addClass('selected');
        });
    };
    $scope.load();
});

app.controller("catalogController", function ($scope) {
    $scope.message = "Hello catalog";
});

app.controller("registerController", function ($scope) {
    $scope.message = "Hello register";
});

app.controller("loginController", function ($scope) {
    $scope.message = "hello login";

});
