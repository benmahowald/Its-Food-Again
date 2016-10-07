myApp.controller('accountController', ['$scope', function($scope){
  console.log('createAcctController sourced');
  $scope.toggleMap = function() {
    $scope.map = false;
  };
  $scope.submitAccount = function () {
    console.log('in submitAccount');
    var contactToSend = {
      // token: String,
      bus_name: $scope.bus_name,
      bus_phone: $scope.bus_phone,
      bus_email: $scope.email,
      bus_type: $scope.bus_type,
      contact_name: $scope.contact_name,
      contact_email: $scope.contact_email,
      address: {
        city: $scope.city,
        state: $scope.state, //(option) list of states drop down
        street: $scope.address,
        zip: $scope.zip
      },
      // admin: true
    }; // end contact to send
    console.log(contactToSend);
  }; // end submitAccount function
}]); // end createAcctController
