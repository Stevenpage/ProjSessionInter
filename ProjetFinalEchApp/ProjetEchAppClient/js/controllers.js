var memoController = angular.module('memoController', []);

memoController.controller('MemoController', function MemoController($scope, $http) {

    console.log("MemoController");

    $scope.refreshMemoList = function () {

        //GET memos on logged user
        console.log(localStorage.getItem($scope.TOKEN_KEY)); //Test
        var token = localStorage.getItem($scope.TOKEN_KEY);
        var headers = {};
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }

        $.ajax({
            type: 'GET',
            url: 'http://localhost:2744/api/memos',
            headers: headers
        }).success(function (data) {
            console.log("GET memos of current user");
            $scope.memos = data;
            console.log("data");
            console.log(data);
            console.log("memos");
            console.log($scope.memos);
            $scope.$apply();
        });

    }

    $scope.addMemo = function () {


        //Output adding memo infos
        console.log($scope.createdMemoTitle + " id:" + $scope.memos.length + 1);

        //Calculating POST time
        var currentTime = new Date()
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        console.log(year);
        console.log(month);
        console.log(day);

        //Token setup
        var token = localStorage.getItem($scope.TOKEN_KEY);
        var headers = {};
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }

        //POST memo
        $.ajax({
            method: 'POST',
            url: "http://localhost:2744/api/memos",
            headers: headers,
            data: {
                Id: $scope.memos.length + 1,
                Title: $scope.createdMemoTitle,
                Content: $scope.createdMemoContent,
                Date: year + "-" + month + "-" + day + "T00:00:00" //Test date
            }
        }).success(function (data) {
            console.log("POST memo for current user");
            $scope.refreshMemoList();
            
        });
    }

    $scope.refreshMemoList();

});

var loginController = angular.module('loginController', []);

loginController.controller('LoginController', function LoginController($scope, $http, $rootScope) {

    console.log("LoginController");
    //Login w/o https
    $scope.login = function () {
            console.log("Login!");
            console.log("Email: " + $scope.loginEmail);
            console.log("Password: " + $scope.loginPassword);
            $.ajax({
                type: 'POST',
                url: 'http://localhost:2744/Token',
                data: {
                    grant_type: 'password',
                    username: $scope.loginEmail,
                    password: $scope.loginPassword
                }
            }).success(function (data) {
                console.log("Login sucess!");
                console.log(data);
                localStorage.setItem($scope.TOKEN_KEY, data.access_token);
                window.location.href = "../memomanager.html"
            })
        }
        //Register w/o https
    $scope.register = function () {
        console.log("Register");
        console.log("Email: " + $scope.registerEmail);
        console.log("Password: " + $scope.registerPassword);
        console.log("Confirm password: " + $scope.registerPasswordConfirm);
        $http({
            method: 'POST',
            url: "http://localhost:2744/api/Account/Register",
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

var socketController = angular.module('socketController', []);

socketController.controller('SocketController', function SocketController($scope, $http, $rootScope) {
    
    console.log("SocketController");
    
    $scope.socket = new WebSocket('ws://localhost:8181');
    $scope.conversation = [];
    $scope.socket.onmessage = function(mess) {
        $scope.conversation.push(mess.data);
        $scope.$apply();
    };
    $scope.sendMessage = function() {
        $scope.socket.send($scope.message);
    }
});