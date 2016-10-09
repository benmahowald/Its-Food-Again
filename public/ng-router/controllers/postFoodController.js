myApp.controller('postFoodController', ['$scope', '$http', function($scope, $http){
  // console.log('in postFoodController');

  $scope.submitFood = function () {
    console.log('in submitFood');
    var foodToSend = {
      portions: $scope.portions,
      bus_name: $scope.bus_name,
      bus_id: $scope.bus_id,
      comment: $scope.comment,
    }; // end contact to send
    $http({
      method: 'POST',
      url: '/client/report',
      data: foodToSend
    }).then(function (response){
          console.log('http post /client success:', response);
        }, function (error) {
          console.log('error in post;', error);
        }); // end then function
    console.log(foodToSend);
    clearFields();
  }; // end submitAccount function
  var clearFields = function() {
    $scope.portions = '';
    $scope.comment = '';
  }; // end clearFields
}]); // end controller
