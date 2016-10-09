myApp.controller('accountController', ['$scope', '$http', function($scope, $http){

  // create account function
  $scope.submitAccount = function () {
    var userProfile = JSON.parse( localStorage.getItem( 'userProfile' ) );
    console.log('in submitAccount');
    var contactToSend = {
      bus_name: $scope.bus_name,
      bus_phone: $scope.bus_phone,
      bus_type: $scope.bus_type,
      contact_name: $scope.contact_name,
      contact_email: userProfile.email,
      address: {
        city: $scope.city,
        state: $scope.state, //(option) list of states drop down
        street: $scope.address,
        zip: $scope.zip
      },
    }; // end contact to send
    $http({
      method: 'POST',
      url: '/client',
      data: contactToSend
    }).then(function (response){
          console.log('http post /client success:', response);
        }, function (error) {
          console.log('error in post;', error);
        }); // end then function
    console.log(contactToSend);
  }; // end submitAccount function
}]); // end createAcctController
