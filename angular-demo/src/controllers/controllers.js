"use strict"

var ctrl= angular.module("com.xa.cateyesmovie.controllers",[]);

ctrl.controller("mainController",
    ["$scope","mainService",function($scope,mainService){
     $scope.adLists = mainService.getMainAdList();
        console.log( $scope.adLists);
}]);

ctrl.controller("movieController",["$scope",function($scope){

}]);