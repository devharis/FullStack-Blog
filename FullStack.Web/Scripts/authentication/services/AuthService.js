'use strict';

app.factory('AuthService', ['$http', '$q', 'API_URL', 'Session', 'localStorageService', function ($http, $q, API_URL, Session, localStorageService) {
    var authService = {};

    authService.login = function (credentials) {
        var data = "grant_type=password&username=" + credentials.username + "&password=" + credentials.password;

        var deferred = $q.defer();
        $http.post('{0}/Token'.format(API_URL), data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            console.log(response);
            // Create session model
            Session.create(response.userName, response.access_token, response['.expires'], response.userRoles);
            // Save to local storage
            localStorageService.set('authorizationData', { user: Session });

            deferred.resolve(response);

        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };

    authService.isAuthenticated = function () {
        return !!localStorageService.get('authorizationData');
    };

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
          authorizedRoles.indexOf(localStorageService.get('authorizationData').userRole) !== -1);
    };

    return authService;
}])