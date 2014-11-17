var app = angular.module('tbc');

app.service('firebaseService', function ($firebase) {
  var firebaseUrl = 'https://tbc.firebaseio.com/';

  this.getUser = function(userId){
    return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
  };

});