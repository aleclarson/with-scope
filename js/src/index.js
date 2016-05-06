var VarStatement, bindScope, cleanCoffeeScriptVars, isCoffeeScriptGenerated, withScope;

require("lotus-require");

VarStatement = require("var-statement");

withScope = function(scope, fn) {
  return (bindScope(scope, fn))();
};

bindScope = function(scope, fn) {
  var body, keys;
  scope.__scope = scope;
  keys = Object.keys(scope);
  body = cleanCoffeeScriptVars(keys, fn.toString());
  return Function.apply(null, keys.concat(["return " + body + ";"])).apply(null, keys.map(function(key) {
    return scope[key];
  }));
};

module.exports = {
  withScope: withScope,
  bindScope: bindScope
};

isCoffeeScriptGenerated = /^function[\s]*\([^\)]*\)[\s]*\{[\s\n]*var /;

cleanCoffeeScriptVars = function(keys, fn) {
  var statement;
  if (isCoffeeScriptGenerated.test(fn)) {
    statement = VarStatement.first(fn);
    fn = statement.remove(keys);
  }
  return fn;
};

//# sourceMappingURL=../../map/src/index.map
