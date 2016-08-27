describe("withScope(Object, Function)", function() {
  var withScope;
  withScope = require("../..").withScope;
  it("exposes an object's properties as local variables", function() {
    var scope;
    scope = {
      foo: true
    };
    return withScope(scope, function() {
      return expect(foo).toBe(true);
    });
  });
  it("exposes a '__scope' variable for introspection", function() {
    var scope;
    scope = {};
    scope.scope = scope;
    return withScope(scope, function() {
      return expect(__scope).toBe(scope);
    });
  });
  return it("removes 'var' statements from the function that would otherwise override a property from '__scope'", function() {
    var scope;
    scope = {
      foo: true
    };
    return withScope(scope, function() {
      var foo;
      if (typeof foo === "undefined" || foo === null) {
        foo = false;
      }
      return expect(foo).toBe(true);
    });
  });
});

//# sourceMappingURL=../../map/spec/index.map
