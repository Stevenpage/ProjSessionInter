var tripsController = angular.module('tripsController', []);

tripsController.controller('TripsController', function TripsController($scope, $http, $rootScope) {

    $scope.Title;
    $scope.StartDate;
    $scope.NbrJour;
    $scope.BudgetLimit;

    $scope.creationVoyage = function () {
        window.location.href = "../templates/CreationVoyage.html"
    }

    $scope.createMemo = function () {
        var token = localStorage.getItem($rootScope.TOKEN_KEY);
        var headers = {};
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }

        console.log(headers);
        if (($scope.Name != "" && $scope.Name != null) && ($scope.Text != "" && $scope.Text != null)) {
            $.ajax({
                method: 'POST',
                url: "http://localhost:6409/api/Memos/",
                data:
                {
                    Title: $scope.Title,
                    StartDate: $scope.StartDate,
                    NbrJour: $scope.NbrJour,
                    BudgetLimit: $scope.BudgetLimit
                },
                headers: headers

            }).success(function (data) {
                console.log(data);
                $scope.call();
                $scope.$apply();

            });
        }
        else
            alert("Le voyage doit contenir des informations")

    };
});
