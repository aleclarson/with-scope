
# with-scope v1.0.0 [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Expose the properties of a given `Object` as local variables to a given `Function`.

```sh
npm install with-scope
```

example
-------

```JavaScript
var withScope = require("with-scope")

var scope = { hello: "world" }

withScope(scope, function () {
  console.log(hello)
})
```
