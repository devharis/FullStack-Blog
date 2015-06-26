'use strict';

app.factory('AuthService', ['$http', '$q', 'API_URL', 'Session', function ($http, $q, API_URL, Session) {
    var authService = {};

    authService.login = function (credentials) {
        var data = "grant_type=password&username=" + credentials.username + "&password=" + credentials.password;
        var deferred = $q.defer();
        $http.post('{0}/Token'.format(API_URL), data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
            //localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            console.log(response);
            //Session.create();

            deferred.resolve(response);

        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };

    authService.isAuthenticated = function () {
        return !!Session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
          authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
}])