/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    // | orderBy : expression : reverse
    // to sort in asc order, set reverse to false
    // to sort in desc order, set reverse to true
    var employees = [
        { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
        { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000 },
        { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000 },
        { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000 },
    ]

    var sortOptions = [
        { value: "name", label: "Name ASC" },
        { value: "gender", label: "Gender ASC" },
        { value: "dateOfBirth", label: "Date of Birth ASC" },
        { value: "-salary", label: "Salary DESC" },
    ]

    $scope.employees = employees;
    $scope.sortColumn = "name";
    $scope.sortOptions = sortOptions;
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false
        $scope.sortColumn = column;  
    }

    $scope.getSortClass = function (column) {
        if($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    }
});