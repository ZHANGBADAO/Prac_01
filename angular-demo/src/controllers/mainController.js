
ctrl.controller("mainController",
    ["$scope","mainService",function($scope,mainService){
     $scope.adLists = mainService.getMainAdList();
        console.log( $scope.adLists);
}]);