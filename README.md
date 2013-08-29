# ngbmin

An angular minifying pre-processor that doesn't try to be too smart.

# how it works

Instead of trying to detect which functions it should or shouldn't transform,
ngbmin uses this simple rule:

> All named function expressions that end with '$ng' will be transformed
> to the array syntax.

Example:

```js
var factory = function myModule$ng($scope, $http) {
};
angular.module('m').factory('f', factory);
```

Output:

```js
var factory = ['$scope', '$http', function myModule$ng($scope, $http) {
}];
angular.module('m').factory('f', factory);
```

# Usage

From the command-line (recommended):

    ngbmin < input.js > output.js

With browserify

    browserify -t ngbmin main.js -o main.bundle.js

## license

MIT

