

var mod = function mod$ng($rootScope, $http) {
    $http.get('lol.txt').then(function(res) {
        console.log(res);
        $rootScope.lol = res;
    });
};
