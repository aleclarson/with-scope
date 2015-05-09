
# with-scope v1.0.1 [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Expose the properties of a given `Object` as local variables to a given `Function`.

```sh
npm install with-scope
```

usage
-----

```JavaScript
var withScope = require("with-scope")

var scope = { hello: "world" }

withScope(scope, function () {
  console.log(hello)
})
```

CoffeeScript-generated functions have their first `var` statement cleaned of any properties found in `__scope`!

```CoffeeScript
withScope = require "with-scope"

scope = hello: "world"

# The function passed to `withScope` would override `__scope.hello` with `var hello;` but this library fixes that for you!
withScope scope, ->
  hello ?= "<no value>"

  # This should still print "world".
  console.log hello
```

tests
-----

All tests are passing! Find out for yourself:

```sh
npm install -g jasmine-node
npm test
```

changelog
---------

#### 1.0.1

&nbsp;&nbsp;
**\+** CoffeeScript support

#### 1.0.0

&nbsp;&nbsp;
**\+** Initial release
