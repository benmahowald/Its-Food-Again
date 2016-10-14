// console.log('sourced client.js');

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
    .when("/about", {
      templateUrl: "/views/partials/about.html",
      controller: "aboutController"
    })
    .otherwise( {
      redirectTo: "/"
    });
}]);
