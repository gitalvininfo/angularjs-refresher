/// <reference path="angular.js" />

var app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
    var employees = [
        { city: "London", name: "Ben", gender: 1, salary: 55000.788 },
        { city: "London", name: "Sara", gender: 2, salary: 68000 },
        { city: "London", name: "Pam", gender: 2, salary: 53000 },
        { city: "London", name: "Todd", gender: 1, salary: 60000 },
        { city: "London", name: "Finn", gender: 3, salary: 60000 },
    ]

    $scope.employees = employees;
    
});