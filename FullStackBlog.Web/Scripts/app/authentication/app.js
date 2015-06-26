'use strict';

var app = angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', 'APP_PATH', function ($routeProvider, $locationProvider, APP_PATH, USER_ROLES) {
        $routeProvider
            .when('/', {
                templateUrl: '{0}/authentication/partials/login.html'.format(APP_PATH),
                controller: 'LoginCtrl',
                resolve: {
                    authorizedRoles: function (USER_ROLES) {
                        return [USER_ROLES.admin]
                    }
                }
            });
    }]);