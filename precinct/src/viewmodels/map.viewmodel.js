/*
    @name app.js
    @description The view model which gets the locations frm model
*/

var app = app || {};
(function() {
    app.MapViewModel = function() {
        var self = this;
        self.currentMap = ko.observable(new app.MapModel());
        self.response = ko.observableArray();
        self.viewLocations = function(viewCallBack) {
            self.currentMap().getLocations(function(data) {
                viewCallBack(data);
            });
        }
    }
})();