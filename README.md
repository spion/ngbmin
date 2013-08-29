# ngbmin

An angular before-minifying processor that doesn't try to be too smart.

# how it works

Instead of detecting which functions it should or shouldn't transform,
it adds a simple rule:

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

Or with browserify

    browserify -t ngbmin main.js -o main.bundle.js

## license

MIT

