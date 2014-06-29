var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function ($routeProvider){
    $routeProvider.when('/books/:isbn', {
        templateUrl: 'templates/book-details.html',
        controller: 'BookDetailsController'
    });
});