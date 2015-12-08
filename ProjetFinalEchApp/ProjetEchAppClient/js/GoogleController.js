var daysController = angular.module('googleController', []);

daysController.controller('GoogleController', function GoogleController($scope, $http, $rootScope) {

    $scope.initMap = function (id, mode) {
        var mapOptions = {
            center: { lat: 45.501459, lng: -73.567543 },
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById(id), mapOptions);

        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();

        var request = {
            origin: 'Masson Montreal',
            destination: 'Cégep Édouard Montpetit',
            avoidHighways: true,
            travelMode: google.maps.TravelMode[mode]
        };
        directionsDisplay.setMap(map);

        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }
    $scope.initWayp = function () {
        var mapOptions = {
            center: { lat: 45.501459, lng: -73.567543 },
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-wayp'), mapOptions);

        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();

        var request = {
            origin: 'Masson Montreal',
            destination: 'Cégep Édouard Montpetit',
            waypoints: [{
                location: "Boucherville",
                stopover: false
            }, {
                location: 'APPCOM Longueuil',
                stopover: true
            }],
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsDisplay.setMap(map);

        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }
    $scope.initPlane = function () {
        var myLatLng = new google.maps.LatLng(0, -180);
        var myOptions = {
            zoom: 3,
            center: myLatLng,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        var map = new google.maps.Map(document.getElementById("map-plane"), myOptions);
        var flightPlanCoordinates = [
            new google.maps.LatLng(37.772323, -122.214897),
            new google.maps.LatLng(21.291982, -157.821856),
            new google.maps.LatLng(-18.142599, 178.431),
            new google.maps.LatLng(-27.46758, 153.027892)
        ];
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        flightPath.setMap(map);
    }

});