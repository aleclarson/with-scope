(function() {
  describe("withScope(Object, Function)", function() {
    var withScope;
    withScope = require("../..");
    it("exposes an object's properties as local variables", function() {
      var scope;
      scope = {
        hello: "world"
      };
      return withScope(scope, function() {
        return expect(hello).toBe("world");
      });
    });
    return it("exposes a '__scope' variable for introspection", function() {
      var scope;
      scope = {};
      scope.scope = scope;
      return withScope(scope, function() {
        return expect(__scope).toBe(scope);
      });
    });
  });

}).call(this);

//# sourceMappingURL=map/index.js.map
