'use strict';

app.service('Session', function () {

    this.create = function (username, bearerToken, expirationDate, userRole) {
        this.isAuthenticated = true;
        this.username = username;
        this.bearerToken = bearerToken;
        this.expirationDate = expirationDate;
        this.userRole = userRole;
    };

    this.destroy = function () {
        this.isAuthenticated = false;
        this.username = '';
        this.bearerToken = '';
        this.expirationDate = null;
        this.userRole = null;
    };
})
