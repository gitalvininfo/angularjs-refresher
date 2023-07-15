/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    // filter can do 3 things, format, sort, and filter


    var employees = [
        { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
        { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000 },
        { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000 },
        { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000 },
    ]

    $scope.employees = employees;
    $scope.rowLimit = 3;

});