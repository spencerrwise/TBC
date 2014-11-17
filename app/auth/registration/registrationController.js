var app = angular.module('tbc');

app.controller('RegistrationController', function ($scope, authService, $location, $rootScope) {



  $scope.register = function () {
    return authService.register($scope.user, function(user){
      $scope.$apply(function(){
        $rootScope.currentUser = user;
        console.log($rootScope.currentUser);
        $location.path('/dashboard')
      });
    });
  };
});