<<<<<<< HEAD
var app = angular.module("myapp", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "aboutController"
        })

        .when("/contact", {
            templateUrl: "templates/contact.html",
            controller: "contactController"
        })
        .otherwise({redirectTo: "templates/home.html"});

});
app.controller("homeController", function ($scope) {
    $scope.load=function(){
        $('#myCarousel').carousel({
            interval: 4000
        });

        // handles the carousel thumbnails
        $('[id^=carousel-selector-]').click( function(){
            var id_selector = $(this).attr("id");
            var id = id_selector.substr(id_selector.length -1);
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
            $('[id=carousel-selector-'+id+']').addClass('selected');
        });
    };
    $scope.load();
});
app.controller("aboutController", function ($scope) {
    $scope.message = "Hello about";
});

app.controller("contactController", function ($scope) {
    $scope.message = "hello contact";
});
/*
app.controller("caraouselDemoController", function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [{
        "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
        "caption": "first"
        },
        {
            "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
            "caption": "second"
        },
        {
            "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
            "caption": "third"
        },
        {
            "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
            "caption": "four"
        },
        {
            "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
            "caption": "five"
        }
    ];
});
*/
=======
var app = angular.module("myapp", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "aboutController"
        })

        .when("/contact", {
            templateUrl: "templates/contact.html",
            controller: "contactController"
        })
        .otherwise({redirectTo: "templates/home.html"});

});
app.controller("homeController", function ($scope) {
    $scope.load=function(){
        $('#myCarousel').carousel({
            interval: 4000
        });

        // handles the carousel thumbnails
        $('[id^=carousel-selector-]').click( function(){
            var id_selector = $(this).attr("id");
            var id = id_selector.substr(id_selector.length -1);
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
            $('[id=carousel-selector-'+id+']').addClass('selected');
        });
    };
    $scope.load();
});
app.controller("aboutController", function ($scope) {
    $scope.message = "Hello about";
});

app.controller("contactController", function ($scope) {
    $scope.message = "hello contact";
});
/*
app.controller("caraouselDemoController", function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [{
        "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
        "caption": "first"
        },
        {
            "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
            "caption": "second"
        },
        {
            "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
            "caption": "third"
        },
        {
            "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
            "caption": "four"
        },
        {
            "imgName": "http://cache.wallpaperdownloader.com/bing/img/WeddedRocks_20100418.jpg",
            "caption": "five"
        }
    ];
});
*/
>>>>>>> 7036eed4328c3cab104cf2bd5cda109dc8361c08
