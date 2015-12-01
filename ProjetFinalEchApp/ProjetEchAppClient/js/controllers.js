var loginController = angular.module('loginController', []);

loginController.controller('LoginController', function LoginController($scope, $http, $rootScope) {
    
    //Login
    $scope.login = function () {
            console.log("Login!");
            console.log("Email: " + $scope.loginEmail);
            console.log("Password: " + $scope.loginPassword);
            $.ajax({
                type: 'POST',
                url: 'http://localhost:53407/Token',
                data: {
                    grant_type: 'password',
                    username: $scope.loginEmail,
                    password: $scope.loginPassword
                }
            }).success(function (data) {
                console.log("Login sucess!");
                console.log(data);
                localStorage.setItem($scope.TOKEN_KEY, data.access_token);
                window.location.href = "../manager.html"
            })
        }
    
    //Register
    $scope.register = function () {
        console.log("Register");
        console.log("Email: " + $scope.registerEmail);
        console.log("Password: " + $scope.registerPassword);
        console.log("Confirm password: " + $scope.registerPasswordConfirm);
        $http({
            method: 'POST',
            url: "http://localhost:53407/api/Account/Register",
            data: {
                Email: $scope.registerEmail,
                Password: $scope.registerPassword,
                ConfirmPassword: $scope.registerPasswordConfirm
            }

        }).success(function (data) {
            console.log("Register succes.");
        });

    }

    $scope.logout = function () {
        console.log("Logout!");
        localStorage.removeItem($scope.TOKEN_KEY);
    }

});


var tripsController = angular.module('tripsController', []);

tripsController.controller('TripsController', function TripsController($scope, $http, $rootScope) {
});

var periodsController = angular.module('periodsController', []);

periodsController.controller('PeriodsController', function PeriodsController($scope, $http, $rootScope) {
});