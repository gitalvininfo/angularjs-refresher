/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var countries = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "Manchester" },
                { name: "Birmingham" },
            ]
        },
        {
            name: "USA",
            cities: [
                { name: "Los Angeles" },
                { name: "Chicago" },
                { name: "Houston" },
            ]
        },
        {
            name: "India",
            cities: [
                { name: "Hyderabad" },
                { name: "Chennai" },
                { name: "Mumbai" },
            ]
        },
    ]

    $scope.countries = countries
});