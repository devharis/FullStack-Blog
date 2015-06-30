'use strict'

app.directive('loginDialog', ['AUTH_EVENTS', function (AUTH_EVENTS) {
    return {
        restrict: 'A',
        template: '<div ng-if="visible" ng-include="\'/views/shared/login-dialog\'">',
        link: function (scope) {
            var showLogin = function () {
                scope.visible = true;
            };

            scope.visible = false;
            scope.$on(AUTH_EVENTS.notAuthenticated, showLogin());
            scope.$on(AUTH_EVENTS.sessionTimeout, showLogin());
        }
    };
}]);