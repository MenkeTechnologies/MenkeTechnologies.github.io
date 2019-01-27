/**
 * Created by jacobmenke on 1/7/17.
 */

var app1 = angular.module('app1', []);

app1.controller('ctrl1', function ($scope) {

    $scope.req = function () {
        alert("its needed");

    };

    $scope.n = "cool";

    // $scope.scopers = "cool duogs";

});
