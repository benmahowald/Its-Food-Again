myApp.controller('manageAccountController', ['$scope', '$http', function($scope, $http){
  // console.log('sourcing account manager controller');

  $scope.getClient = function () {
    $http({
      method: 'GET',
      url: '/client/' + $scope.currentBus_id,
    }).then(function (response){
          console.log('get manage account success:', response.data);
          $scope.clientData = response.data;
        }, function (error) {
          console.log('error in get;', error);
        }); // end then function
    }; // end getClients

    $scope.getClient();

    $scope.updateClient = function(data) {
		  console.log( 'Data', data );
  		$http({
  			method: 'PUT',
  			url: '/client/' + $scope.currentBus_id,
  			data: data
  		}).then($scope.getClient);
  	};
}]); // end manage account controller
