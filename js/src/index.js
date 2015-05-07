(function() {
  var withScope;

  withScope = module.exports = function(scope, fn) {
    var keys, values;
    keys = Object.keys(scope);
    values = keys.map(function(key) {
      return scope[key];
    });
    keys.push("__scope");
    values.push(scope);
    keys.push("(" + fn.toString() + ")()");
    scope = Function.apply(null, keys);
    return scope.apply(null, values);
  };

}).call(this);

//# sourceMappingURL=map/index.js.map
