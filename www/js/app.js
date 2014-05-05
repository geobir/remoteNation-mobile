document.addEventListener('deviceready', function()
{
    //ici du code au lancement
}, false)

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
    $routeProvider
        .when('/home', {templateUrl: 'view/home.html'})
        .otherwise({redirectTo: '/home'})
})
