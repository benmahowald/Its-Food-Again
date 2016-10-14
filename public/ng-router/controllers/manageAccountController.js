myApp.controller('manageAccountController', ['$scope', '$http', function($scope, $http){
  console.log('sourcing account manager controller');
  console.log($scope.currentBus_id);
  $currentClient.user = {
    bus_name: 'awesome user'

  };
  $http({
    method: 'PUT',
    url: '/client/' + $scope.currentBus_id,
    data: clientUpdate
  }).then(function (response){
        console.log('get manage account success:', response);
      }, function (error) {
        console.log('error in get;', error);
      }); // end then function
}]);
