'use strict';

app.service('User', function () {

    var addUser = function (username, password) {
        this.username = username;
        this.password = password;
    };

    var clearUser = function () {
        this.username = '';
        this.password = '';
    };
})