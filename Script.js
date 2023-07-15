/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var employees = [
        { city: "London", name: "Ben", gender: "Male", salary: 55000.788 },
        { city: "Los Angeles", name: "Sara", gender: "Female", salary: 68000 },
        { city: "Tokyo", name: "Pam", gender: "Female", salary: 53000 },
        { city: "Madrid", name: "Todd", gender: "Male", salary: 60000 },
        { city: "Moscow", name: "Finn", gender: "Male", salary: 60000 },
    ]

    $scope.employees = employees;

    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        } else {
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    }

});