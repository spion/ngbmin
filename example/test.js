

var mod = function mod$ng($rootScope, $http) {
    $http.get('lol.txt').then(function(res) {
        console.log(res);
        $rootScope.lol = res;
    });
};

angular.module('m').factory('f', 
    function($rootScope, $http) {
        // code    
    });


var factory = function myModule$ng($scope, $http) {
};

angular.module('m').factory('f', factory);

