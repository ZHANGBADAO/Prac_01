"use strict"

//require("./controllers/controllers.min.js") ;
//require("./directives/directives.min.js") ;
//require("./assets/angular-route.js");



var app = angular.module("com.xa.cateyesmovie",
    [
        "ngRoute",
        "com.xa.cateyesmovie.controllers",
        "com.xa.cateyesmovie.directives",
        "com.xa.cateyesmovie.services"
    ]);

app.config(function($routeProvider){
    $routeProvider.when("/main",{
        templateUrl:"views/main.html",
        controller:"mainController"
    }).when("/movie",{
        templateUrl:"views/movie.html",
        controller:"movieController"
    }).otherwise("/main")
})