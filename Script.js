/// <reference path="angular.js" />

var app = angular.module("myModule", []);

app.controller("myController", function ($scope, $http) {

    $http.get("https://jsonplaceholder.typicode.com/todos/")
        .then(function (response) {
            $scope.todos = response.data
        });
});