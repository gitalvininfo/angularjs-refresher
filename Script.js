/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var country = {
        name: 'PAGCOR',
        capital: '3 Million Logo 😭',
        flag: "images/pagcor.png"
    }

    $scope.country = country;
});