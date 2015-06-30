'use strict';

app.controller('LoginCtrl', ['$scope', '$rootScope', '$window', 'AUTH_EVENTS', 'AuthService', function ($scope, $rootScope, $window, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function () {
        AuthService.login($scope.credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

    $scope.isAuthenticated = function () {
        if (AuthService.isAuthenticated())
            $window.location.href = '/'; //$location.path('/');
    };

    var init = function () {
        $scope.isAuthenticated();
    };

    init();
}])
