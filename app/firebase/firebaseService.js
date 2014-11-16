var app = angular.module('tbc');

app.service('firebaseService', function ($firebase) {
  var firebaseUrl = 'https://tbc.firebaseio.com/';

  this.getUser = function(userId){
    return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
  };

  this.getHost = function(userId){
    return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/host')).$asArray(); 
  }

  this.getPlayer = function(userId){
    return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/player')).$asArray(); 
  }
});