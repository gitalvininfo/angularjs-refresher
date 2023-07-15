/// <reference path="angular.js" />

var app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
    var employees = [
        { name: "Ben", gender: 1, salary: 55000.788 },
        { name: "Sara", gender: 2, salary: 68000 },
        { name: "Pam", gender: 2, salary: 53000 },
        { name: "Todd", gender: 1, salary: 60000 },
        { name: "Finn", gender: 3, salary: 60000 },
    ]

    $scope.employees = employees;

});