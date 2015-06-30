'use strict';

var app = angular.module('app', ['ngRoute', 'LocalStorageModule'])
    .config(['$routeProvider', '$locationProvider', '$provide', 'APP_PATH', 'USER_ROLES', function ($routeProvider, $locationProvider, $provide, APP_PATH, USER_ROLES) {
        $locationProvider.html5Mode(true);
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

        // Broadcast tracker
        $provide.decorator("$rootScope", function($delegate) {
            var Scope = $delegate.constructor;
            var origBroadcast = Scope.prototype.$broadcast;
            var origEmit = Scope.prototype.$emit;

            Scope.prototype.$broadcast = function() {
                console.log("$broadcast was called on $scope " + Scope.$id + " with arguments:",
                                   arguments);
                return origBroadcast.apply(this, arguments);
            };
            Scope.prototype.$emit = function() {
                console.log("$emit was called on $scope " + Scope.$id + " with arguments:",
                                   arguments);
                return origEmit.apply(this, arguments);
            };
            return $delegate;
        });
    }])
    .run(function ($rootScope, AUTH_EVENTS, AuthService) {
        $rootScope.$on('$routeChangeStart', function (event, next) {
            var authorizedRoles = next.authorizedRoles;
            if (!AuthService.isAuthorized(authorizedRoles)) {
                if (AuthService.isAuthenticated())
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized); // user is not allowed
                else
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated); // user is not logged in
            }
        });
    });