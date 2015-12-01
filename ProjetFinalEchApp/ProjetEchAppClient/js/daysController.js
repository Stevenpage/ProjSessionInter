var daysController = angular.module('daysController', []);

daysController.controller('DaysController', function DaysController($scope, $http, $rootScope) {

    //$scope.Voyage;
    $scope.DayId;

    //$scope.GetDaysForVoyage = function () {
    //    $http({
    //        method: 'GET',
    //        header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
    //        TripId: $scope.Voyage.Id,
    //        url: "http://localhost:53407/api/DaysByVoyage"
    //    }).success(function (data) {
    //        console.log(data)
    //        $scope.Memos = data;
    //    });
    //}

    $scope.GetPinsForDay = function () {
        $http({
            method: 'GET',
            header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
            url: 'http://localhost:53407/api/days/getdaypins/' + $scope.DayId
        }).success(function (data) {
            console.log("GET pins of specified day");
            console.log(data);
        });
    }

    $scope.AddPinForDay = function () {
        $http({
                    method: 'POST',
                    url: "http://localhost:53407/api/days/getdaypins/",
                    header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
                    data:
                    {
                        DayId: $scope.DayId,
                        TranportType: $scope.AddPinTransportType,
                        StartDate: $scope.AddPinStartDate,
                        EndDate: $scope.AddPinEndDate,
                        Longitude: $scope.AddPinLongitude,
                        Latitude: $scope.AddPinLatitude,
                        CashSpent: $scope.AddPinCashSpent
                    }

                }).success(function (data) {
                    console.log(data)
                });
    }

    $scope.DeleteLastPin = function () {
        $http({
            method: 'GET',
            header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
            url: "http://localhost:53407/api/days/getdaypins/" + $scope.DayId
        }).success(function (data) {
            console.log(data[data.length - 1].MemoId)
            $http({
                method: 'DELETE',
                url: "http://localhost:53407/api/days/getdaypins/" + data[data.length - 1].MemoId
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
                url: "http://localhost:53407/api/days/getdaypins/" + $scope.DayId + $scope.IdDelete
            }).success(function (data) {
                console.log(data)
            });
        }

    //$scope.AddDay = function () {
    //    $http({
    //        method: 'POST',
    //        url: "http://localhost:53407/api/Days",
    //        header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
    //        data:
    //        {
    //            TripId: $scope.Voyage.Id,
    //            TranportType: $scope.AddTransportType,
    //            StartDate: $scope.AddStartDate,
    //            EndDate: $scope.AddEndDate,
    //            BudgetLimit: $scope.AddBudgetLimit
    //        }

    //    }).success(function (data) {
    //        console.log(data)
    //    });
    //}

    //$scope.DeleteLastDay = function () {
    //    $http({
    //        method: 'GET',
    //        header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
    //        url: "http://localhost:53407/api/DaysByVoyage"
    //    }).success(function (data) {
    //        console.log(data[data.length - 1].MemoId)
    //        $http({
    //            method: 'DELETE',
    //            url: "http://localhost:53407/api/DaysByVoyage" + data[data.length - 1].MemoId
    //        }).success(function (data) {
    //            console.log(data)
    //        });
    //        console.log(data)
    //    });
    //}

    //$scope.DeleteById = function () {
    //    $http({
    //        method: 'DELETE',
    //        header: { Authorization: 'Bearer ' + localStorage.getItem($scope.TOKEN_KEY) },
    //        url: "http://localhost:5813/api/Memos/" + $scope.IdDelete
    //    }).success(function (data) {
    //        console.log(data)
    //    });
    //}

});