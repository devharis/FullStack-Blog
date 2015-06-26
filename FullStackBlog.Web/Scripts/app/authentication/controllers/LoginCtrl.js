'use strict';

app.controller('LoginCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'User', 'AuthService', function ($scope, $rootScope, AUTH_EVENTS, User, AuthService) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function () {
        AuthService.login($scope.credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };
}])
