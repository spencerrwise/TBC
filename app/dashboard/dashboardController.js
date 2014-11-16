var app = angular.module('tbc');

app.controller('DashboardController', function ($scope, firebaseService, $location, userReference, hostRefrence, $firebase, $rootScope, $cookieStore, authService) {



  var ref = new Firebase("https://tbc.firebaseio.com/");
  var sync = $firebase(ref);

  $scope.user = $cookieStore.get('currentUser');

  var isLoggedIn = function() {
    var url = $location.url();
    var id = url[url.length - 1];
    $scope.user = firebaseService.getUser(id);
    return $scope.user
  }();

  
  $scope.createRoom = function() {
    sync.$set({name: $scope.user.room});
    $scope.user.$save();
    $scope.room = '';
  }

  $scope.logout = function() {
    $scope.user = '';
    $location.path('/')
  }



});