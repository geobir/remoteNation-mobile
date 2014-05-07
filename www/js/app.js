document.addEventListener('deviceready', function()
{
    //Lancement
}, false)

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
    $routeProvider
        .when('/home', {templateUrl: 'view/home.html'})
        .when('/player', {templateUrl: 'view/player.html'})
        .otherwise({redirectTo: '/home'})
})

var userData = "";
takeIp('e2r4p2.42.fr:4243');
var desktopServers = ['10.12.4.2:4242'];

currentMac = new Remote(desktopServers[0]);

function changeState(current)
{
    if (current.className == 'btn-play')
        current.className = "btn-pause";
    else
        current.className = "btn-play";
}

function affData()
{
    console.log(JSON.stringify(userData));
    console.log("TOKEN:")
    console.log(userData['auth_token']);
}
