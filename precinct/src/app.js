/*
    @name app.js
    @description The basic knockout app
*/

var app = app || {};
app.mapData = {};
(function() {
    app.mapObj = function() {
        var self = this;
        self.inputLocation = ko.observable();
        self.locations = ko.observableArray();

        /*  @name init
            @param no parameters
            @description initialize the app
        */
        function init() {
            self.mapObject = ko.observable(new app.MapViewModel());
            self.markers = ko.observableArray();
            self.tempLocations = ko.observableArray();
            self.setSidebarFlag();
            self.getMapLocations();
        };

        /*  @name filterLocations
            @param no parameters
            @description filters the locations according to input 
        */
        //self.filterLocations = function() {
        self.locFilter = ko.computed(function() {
            var filter = self.inputLocation();
            if (!filter) {
                return self.locations();
            } else {
                return ko.utils.arrayFilter(self.locations(), function(loc) {
                    if (loc.title.toLowerCase().indexOf(self.inputLocation().toLowerCase()) !== -1) {
                        return true;
                    }
                });
            }
        });

        /*  @name filterLocations
            @param no parameters
            @description filters the location and markers 
        */
        self.filterLocations = function() {
            app.mapData = self.locFilter();
            createMarkers(map, app.mapData);
        };

        self.onEnter = function(d, e) {
            if (e.keyCode == 13) {
                self.filterLocations();
            }
        }

        /*  @name setSidebarFlag
            @param no parameters
            @description sets the isSidebarVisible to true false based on screen width
        */
        self.setSidebarFlag = function() {
            if (window.innerWidth <= 768) {
                self.isSidebarVisible = ko.observable(false);
            } else {
                self.isSidebarVisible = ko.observable(true);
            }
        };


        /*  @name getMapLocations
            @param no parameters
            @description get Locations from view model
        */
        self.getMapLocations = function() {
            self.mapObject().viewLocations(function(data) {
                ko.utils.arrayPushAll(self.locations, data);
                app.mapData = self.locations();
            });
        };

        /*  @name toggleSidebar
            @param true or false
            @description toggle sidebar to show and hide
        */
        self.toggleSidebar = function(showOrHide) {
            self.isSidebarVisible(!showOrHide());
        };

        /*  @name highlightMarker
            @param title
            @description it takes title of location and animate the corresponding marker
        */

        self.highlightMarker = function(title) {
            for (var i = 0; i < markers.length; i++) {
                if (title === markers[i].title) {
                    var marker = markers[i];
                    animateMarker(marker);
                    createInfoWindow(marker);
                }
            }
        };
        init();
    }
    ko.applyBindings(new app.mapObj());
})();