(function() {
  var VarStatement, cleanCoffeeScriptVars, isCoffeeScriptGenerated, withScope;

  withScope = module.exports = function(scope, fn) {
    var keys, values;
    keys = Object.keys(scope);
    values = keys.map(function(key) {
      return scope[key];
    });
    keys.push("__scope");
    values.push(scope);
    fn = cleanCoffeeScriptVars(fn.toString());
    keys.push("(" + fn + ")()");
    global._keys = keys;
    scope = Function.apply(null, keys);
    return scope.apply(null, values);
  };


  /* CoffeeScript support */

  VarStatement = null;

  isCoffeeScriptGenerated = /^function[\s]*\([^\)]*\)[\s]*\{[\s\n]*var /;

  cleanCoffeeScriptVars = function(fn) {
    var statement;
    if (isCoffeeScriptGenerated.test(fn)) {
      if (VarStatement == null) {
        VarStatement = require("../../../var-statement");
      }
      statement = VarStatement.first(fn);
      fn = statement.remove.apply(statement, keys);
    }
    return fn;
  };

}).call(this);

//# sourceMappingURL=map/index.js.map
