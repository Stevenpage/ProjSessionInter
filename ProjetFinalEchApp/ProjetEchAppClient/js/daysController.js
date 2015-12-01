var daysController = angular.module('daysController', []);

daysController.controller('DaysController', function DaysController($scope, $http, $rootScope) {

    $scope.Voyage;

    $scope.GetDaysForVoyage = function () {
        $http({
            method: 'GET',
            header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
            TripId: $scope.Voyage.Id,
            url: "http://localhost:53407/api/DaysByVoyage"
        }).success(function (data) {
            console.log(data)
            $scope.Memos = data;
        });
    }

    $scope.GetPinsForDays = function () {
        $http({
            method: 'GET',
            header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
            url: 'http://localhost:53407/api/days/getdaypins/' + $scope.DayId,
        }).success(function (data) {
            console.log("GET pins of specified day");
            $scope.dayPins = data;
            console.log("data");
            console.log(data);
            console.log("days");
            console.log($scope.dayPins);
        });
    }

    $scope.AddDay = function () {
        $http({
            method: 'POST',
            url: "http://localhost:53407/api/Days",
            header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
            data:
            {
                TripId: $scope.Voyage.Id,
                TranportType: $scope.AddTransportType,
                StartDate: $scope.AddStartDate,
                EndDate: $scope.AddEndDate,
                BudgetLimit: $scope.AddBudgetLimit
            }

        }).success(function (data) {
            console.log(data)
        });
    }

    $scope.DeleteLastDay = function () {
        $http({
            method: 'GET',
            header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
            url: "http://localhost:53407/api/DaysByVoyage"
        }).success(function (data) {
            console.log(data[data.length - 1].MemoId)
            $http({
                method: 'DELETE',
                url: "http://localhost:53407/api/DaysByVoyage" + data[data.length - 1].MemoId
            }).success(function (data) {
                console.log(data)
            });
            console.log(data)
        });
    }

    $scope.DeleteById = function () {
        $http({
            method: 'DELETE',
            header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
            url: "http://localhost:5813/api/Memos/" + $scope.IdDelete
        }).success(function (data) {
            console.log(data)
        });
    }

});