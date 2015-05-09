
describe "withScope(Object, Function)", ->

  withScope = require "../.."

  it "exposes an object's properties as local variables", ->
    scope = foo: yes
    withScope scope, ->
      expect(foo).toBe yes

  it "exposes a '__scope' variable for introspection", ->
    scope = {}
    scope.scope = scope
    withScope scope, ->
      expect(__scope).toBe scope

  it "removes 'var' statements from the function that would otherwise override a property from '__scope'", ->
    scope = foo: yes
    withScope scope, ->
      foo = no if !foo?
      expect(foo).toBe yes
