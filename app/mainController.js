var app = angular.module('tbc');

app.controller('MainController', function ($scope, authService, $location) {
  $scope.state = $location.$$path;
  if($scope.state === '/') {
    $scope.showReg === true;
  }

  $scope.goToRegistration = function() {
    $location.path('/register')
  }

  $scope.goToLogin = function() {
    $location.path('/login')
  }
});