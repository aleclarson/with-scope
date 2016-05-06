
# with-scope 1.0.4 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Expose the properties of a given `Object` as local variables to a given `Function`.

```coffee
{ withScope, bindScope } = require "with-scope"

result = withScope { hello: "world" }, -> hello
result # => "world"

callScope = bindScope { hello: "world" }, (before) -> before + hello
result = callScope "hello "
result # => "hello world"
```
