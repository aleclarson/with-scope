
# with-scope v1.0.3 [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Expose the properties of a given `Object` as local variables to a given `Function`.

```sh
npm install aleclarson/with-scope#1.0.3
```

usage
-----

```CoffeeScript
{ withScope, bindScope } = require "with-scope"

withScope { hello: "world" }, ->
  console.log hello

withScope.call { foo: 1 }, { bar: 2 }, 3, (dog) ->
  console.log @foo
  console.log bar
  console.log dog

myFunc = bindScope { hello: "world" }, (before) ->
  return before + hello

myFunc "hello " # "hello world"
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

#### 1.0.3

&nbsp;&nbsp;
**\+** Removed accidental `require "../../../lotus-require"`!

#### 1.0.2

&nbsp;&nbsp;
**\+** Minor code structure changes

#### 1.0.1

&nbsp;&nbsp;
**\+** CoffeeScript support

#### 1.0.0

&nbsp;&nbsp;
**\+** Initial release
