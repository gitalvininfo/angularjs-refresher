/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var employee = {
        firstName: 'David',
        lastName: 'Hastings'
    }
    
    $scope.message = "Angular JS Tutorial";
});