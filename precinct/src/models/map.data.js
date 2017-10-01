/*
    @name app.js
    @description The model file which reads the locations from JSON
*/

var app = app || {};
(function() {
    app.MapModel = function() {
        var self = this;
        self.getLocations = function(callback) {
            $.ajax({
                url: "./src/models/map.data.json",
                success: function(data) {
                    callback(data);
                },
                error: function(error) {
                    alert("Error occured" + error);
                }
            });
        }
    }
})();