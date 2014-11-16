var app = angular.module('tbc');

app.directive('navigation', function () {
    return {
        restrict: 'AE',
        templateUrl: 'app/navigation/navigation.html',
        controller: 'NavigationController'
    };
});