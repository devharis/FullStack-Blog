(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'app.config'])
        .config(['$routeProvider', 'APP_PATH', function ($routeProvider, APP_PATH) {
            $routeProvider
                .when('/', {
                    templateUrl: '{0}/url'.format(APP_PATH),
                    controller: 'ListCtrl',
                    resolve: {
                        authorizedRoles: function () {
                            return [USER_ROLES.admin]
                        }
                    }
                });
        }]).run(function ($rootScope, AUTH_EVENTS, AuthService) {
            $rootScope.$on('$stateChangeStart', function (event, next) {
                var authorizedRoles = next.data.authorizedRoles;
                if (!AuthService.isAuthorized(authorizedRoles)) {
                    event.preventDefault();
                    if (AuthService.isAuthenticated()) {
                        // user is not allowed
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                    } else {
                        // user is not logged in
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                    }
                }
            });
        });
})();