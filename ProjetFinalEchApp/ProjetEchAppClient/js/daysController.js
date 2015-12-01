var daysController = angular.module('daysController', []);

daysController.controller('DaysController', function DaysController($scope, $http, $rootScope) {

    $scope.Voyage;
    

    $scope.AddDay = function () {
        $http({
            method: 'POST',
            url: "http://localhost:XXXX/api/Days",
            header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
            data:
            {
                texte: $scope.AddTripId,
                titre: $scope.titreadd,
                date: $scope.dateadd,
                //UtilisateurId: localStorage.getItem($scope.TOKEN_KEY).id
                UtilisateurId: "I don't care about that!"
            }

        }).success(function (data) {
            console.log(data)
        });
    }

});