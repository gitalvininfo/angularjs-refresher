/// <reference path="angular.js" />

var app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
    var employees = [
        { name: "Ben", gender: "Male", salary: 55000.788 },
        { name: "Sara", gender: "Female", salary: 68000 },
        { name: "Pam", gender: "Female", salary: 53000 },
        { name: "Todd", gender: "Male", salary: 60000 },
        { name: "Finn", gender: "Male", salary: 60000 },
    ]

    $scope.employees = employees;

});