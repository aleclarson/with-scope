
describe "withScope(Object, Function)", ->

  withScope = require "../.."

  it "exposes an object's properties as local variables", ->
    scope = hello: "world"
    withScope scope, ->
      expect(hello).toBe "world"

  it "exposes a '__scope' variable for introspection", ->
    scope = {}
    scope.scope = scope
    withScope scope, ->
      expect(__scope).toBe scope
