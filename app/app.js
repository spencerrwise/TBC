var app = angular.module('tbc', ['firebase', 'ngRoute', 'ngCookies']);

app.config(function($routeProvider){

$routeProvider
  .when('/',{
    templateUrl: 'app/landing.html',
    controller: 'MainController'
  })
  .when('/login', {
    templateUrl: 'app/auth/login/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'app/auth/registration/register.html',
    controller: 'RegistrationController'
  })
  .when('/dashboard', {
    templateUrl: 'app/dashboard/dashboard.html',
    controller: 'DashboardController'
  })
  .otherwise({
    redirectTo: '/'
  });
});