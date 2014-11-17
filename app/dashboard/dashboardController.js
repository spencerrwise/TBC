var app = angular.module('tbc');

app.controller('DashboardController', function ($scope, firebaseService, $location, $firebase, $rootScope, $cookieStore, authService) {

  var getCurrentUser = function(){
    return authService.getCurrentUser();
  }

  $scope.auth = getCurrentUser();
  console.log('auth ', $scope.auth);

  var parseId = function() {
    var arr = $scope.auth.uid.split('');
    var id = [];
    for (var i = 0; i < arr.length; i++) {
      if(parseInt(arr[i])) {
        id.push(arr[i])
      }
    };
    id = id.join('');
    $scope.id = id;
  }();

  var setUser = function() {
    return firebaseService.getUser($scope.id)
  };

  $scope.user = setUser();
  console.log('$user: ', $scope.user);



});