/// <reference path="angular.js" />

var app = angular.module("myModule", []);

app.controller("myController", function ($scope, $http, $log) {

    $http({
        method: 'GET',
        url: "https://jsonplaceholder.typicode.com/todos/"
    })
        .then(function (response) {
            $scope.todos = response.data;
            $log.info(response)
        }, function (response) {
            $log.info(response)
        });
});