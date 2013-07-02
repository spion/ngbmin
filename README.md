# ngbrowserify

Angular function injection to array injection transform for browserify.

    browserify -t ngbrowserify main.js -o main.bundle.js

Or use it from the command-line instead of ngmin:

    ngbmin < input.js > output.js

## example input

```js
angular.module('m').factory('f', 
    function($rootScope, $http) {
        // code    
    });
```

Output:
```js
angular.module('m').factory('f', 
    ['$rootScope', '$http', function($rootScope, $http) {
        // code    
    }]);
```

## alternate syntax

Named function expressions that end with '$ng' will always be transformed.


```js
var factory = function myModule$ng($scope, $http) {
};

Output:

angular.module('m').factory('f', factory);
```

```js
var factory = [$scope, $http, function myModule$ng($scope, $http) {
}];

angular.module('m').factory('f', factory);
```

## license

MIT

