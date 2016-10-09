// declare user roles
var guest = 1;
var user = 2;
var admin = 3;

var lock = new Auth0Lock('HHp6IJkxeJhf5IKHQ5NUAETGyq9ggCll', 'ben-mahowald.auth0.com');
// log out url, from Auth0
var logOutUrl = 'https://ben-mahowald.auth0.com/v2/logout';

myApp.controller('homeController', ['$scope', '$http', function($scope, $http){
  // console.log('in home controller');

  // initialize map to show on load
  $scope.map = true;

  // button click events to show and hide map
  $scope.showMap = function (){
    $scope.map = true;
  }; // end showMap
  $scope.hideMap = function (){
    $scope.map = false;
  }; // end hideMap

  $scope.logIn = function(){
    // call out logIn function from auth0.js
    // console.log( 'in logIn' );
    lock.show( function( err, profile, token ) {
      if (err) {
        console.error( "auth error: ", err);
      } // end error
      else {
        // save token to localStorage
        localStorage.setItem( 'userToken', token );
        // save user profile to localStorage
        localStorage.setItem( 'userProfile', JSON.stringify( profile ) );
        // re-initialize to set dom view according to user
        $scope.init();
      } // end no error
    }); //end lock.show
  }; // end scope.logIn

  $scope.logOut = function(){
    // call our logOutUrl
    $http({
      method:'GET',
      url: logOutUrl,
    }).then( function( data ){
      // if logged out OK
      if( data.data == 'OK' ){
        // empty localStorage
        emptyLocalStorage();
        $scope.showUser = false;
        $scope.match = false;
      } // end if
    }); // end then
  }; // end scope.logOut

  // uniquely identify user by emal
  var checkUser = function(profile){
    // console.log('in checkUser');
    // get call to retrive clients from DB
    $http({
      method: 'GET',
      url: '/client',
    }).then(function(response) {
        $scope.clients = response.data;

        // iterate over client emails and match with current user
        for (var i = 0; i < $scope.clients.length; i++) {
          if(profile === $scope.clients[i].contact_email){
            console.log("there's a match in the database");
            // set match to manipulate DOM
            $scope.match = true;
            // grab business name and ID to use in postFoodController
            // to associate a donation with a specific bussiness account
            $scope.bus_name = $scope.clients[i].bus_name;
            $scope.bus_id = $scope.clients[i]._id;
            console.log($scope.bus_name + ' ' + $scope.bus_id);
        }else{
            $scope.match = false;
        } // end else
        } // end for loop
    }, function(err) {
      console.log('error in retrieving clients:', err);
    }); // end then function
}; // end checkUser Function

$scope.init = function(){
  console.log( 'in init' );
  // check if a user's info is saved in localStorage
  if( JSON.parse( localStorage.getItem( 'userProfile' ) ) ){
    // if so, save userProfile as $scope.userProfile
    $scope.userProfile = JSON.parse( localStorage.getItem( 'userProfile' ) );
    console.log( 'loggedIn:', $scope.userProfile);
    $scope.showUser = true;
    checkUser($scope.userProfile.email);
  }
  else{
    // if not, make sure we are logged out and empty
    emptyLocalStorage();
    $scope.showUser = false;
  }
}; // end init function

// run init on controller load
$scope.init();

}]); // end authController

var emptyLocalStorage = function(){
  localStorage.removeItem( 'userProfile' );
  localStorage.removeItem( 'userToken' );
}; // end emptyLocalStorage
