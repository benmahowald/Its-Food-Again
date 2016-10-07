myApp.controller('homeController', ['$scope', function($scope){
console.log('in home controller');
$scope.map = true;
  $scope.showMap = function (){
    $scope.map = true;
    console.log($scope.map);
  };
  $scope.hideMap = function (){
    $scope.map = false;
    console.log($scope.map);
  };
}]);
