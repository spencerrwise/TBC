var app = angular.module('tbc');
app.controller('LoginController', function ($scope, authService, $location, $rootScope, $cookieStore) {
  $scope.login = function () {
    return authService.login($scope.user, function(user){
      $scope.$apply(function(){
        console.log(user)
        $rootScope.currentUser = user;
        console.log($rootScope.currentUser);
        $cookieStore.put('currentUser', user);
        $location.path('/dashboard')
      });
    });
  };
});