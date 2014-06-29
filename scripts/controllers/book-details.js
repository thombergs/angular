angularApp.controller('BookDetailsController', function($scope){
   $scope.book = {
     title      : 'AngularJS',
     subtitle   : 'Eine praktische Einführung in das Javascript-Framework',
     isbn       : '978-3-86490-154-6',
     author     : 'Tarasiewicz, Böhm',
     publisher  : {
         name       : 'dpunkt.verlag',
         url        : 'http://dpunkt.de'
     }
   };
});