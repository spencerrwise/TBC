var app = angular.module('tbc');

app.controller('NavigationController', function($scope, firebaseService, $location, authService) {

  // var parseId = function(url) {
  //   var arr = url.split("");
  //   var idArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     var parsed = parseInt(arr[i]);
  //     if(parsed) {
  //       idArr.push(arr[i]);
  //     }
  //   }
  //   $scope.fetchId = idArr.join("");
  //   return $scope.fetchId;
  // }($location.$$url);

  // $scope.getUser = function() {
  //   $scope.user = firebaseService.getUser($scope.fetchId);
  // }
  //  $scope.getUser();

  //  $scope.logout = function() {
  //   authService.logout();
  //  }

   console.log('from nav ', $scope.user)
});