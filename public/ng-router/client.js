console.log('sourced client.js');

var myApp = angular.module('myApp', ["ngRoute"]);

// config routes
myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .when("/create", {
      templateUrl: "/views/partials/createAccount.html",
      controller: "accountController"
    })
    .when("/postFood", {
      templateUrl: "/views/partials/postFood.html",
      controller: "postFoodController"
    })
    .otherwise( {
      redirectTo: "/"
    });
}]);
// var lock = new Auth0Lock('HHp6IJkxeJhf5IKHQ5NUAETGyq9ggCll', 'ben-mahowald.auth0.com');
// // log out url, from Auth0
// var logOutUrl = 'https://ben-mahowald.auth0.com/v2/logout';
