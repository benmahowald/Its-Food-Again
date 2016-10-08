var lock = new Auth0Lock('HHp6IJkxeJhf5IKHQ5NUAETGyq9ggCll', 'ben-mahowald.auth0.com');
// log out url, from Auth0
var logOutUrl = 'https://ben-mahowald.auth0.com/v2/logout';


myApp.controller('homeController', ['$scope', function($scope){
// console.log('in home controller');
$scope.map = true;
  $scope.showMap = function (){
    $scope.map = true;
    console.log($scope.map);
  }; // end showMap
  $scope.hideMap = function (){
    $scope.map = false;
  }; // end hideMap

  
}]); // end controller
