myApp.controller('postFoodController', ['$scope', '$http', function($scope, $http){
  // console.log('in postFoodController');

  $scope.submitFood = function () {
    console.log('in submitFood');
    var foodToSend = {
      report: {
        bus_id: $scope.currentBus_id,
        portions: $scope.portions,
        comment: $scope.comment
      }
    }; // end contact to send

    $http({
      method: 'POST',
      url: '/report/' + $scope.currentBus_id,
      data: foodToSend
    }).then(function (response){
          console.log('http post report success:', response);
        }, function (error) {
          console.log('error in post;', error);
        }); // end then function
    console.log(foodToSend);
    clearFields();
    location.reload();
  }; // end submitFood function

  var clearFields = function() {
    $scope.portions = '';
    $scope.comment = '';
  }; // end clearFields
}]); // end controller
