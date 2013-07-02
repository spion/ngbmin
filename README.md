# ngbrowserify

Angular function injection to array injection transform for browserify.

    browserify -t ngbrowserify main.js -o main.bundle.js

Example input: 

```js
angular.module('m').factory('f', function($rootScope, $http) {
    // code    
});
```

Output:
```js
angular.module('m').factory('f', ['$rootScope', '$http', function($rootScope, $http) {
    // code    
}]);
```



Alternate syntax - named function expressions that end with '$ng' 
will always be transformed.


```js
var factory = function myModule$ng($scope, $http) {
};

angular.module('m').factory('f', factory);
```

```js
var factory = [$scope, $http, function myModule$ng($scope, $http) {
}];

angular.module('m').factory('f', factory);
```
