var app = angular.module('tbc');

app.directive('editForm', function() {
    return {
        restrict: 'A',
        link: function ($scope, element, attributes) {
          $('form').addClass('opaque');
          $('.glyphicon-edit').bind('click', function() {
            $('form').removeClass('opaque')
            $('.glyphicon-edit').addClass('opaq')
          });

          $('#hideForm').bind('click', function() {
            $('form').addClass('opaque')
          })
        }
    };
});