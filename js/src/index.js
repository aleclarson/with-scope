var VarStatement, cleanCoffeeScriptVars, exports, isCoffeeScriptGenerated,
  slice = [].slice;

require("lotus-require");

VarStatement = require("var-statement");

exports = module.exports = {
  withScope: function() {
    var args, fn, i, scope;
    scope = arguments[0], args = 3 <= arguments.length ? slice.call(arguments, 1, i = arguments.length - 1) : (i = 1, []), fn = arguments[i++];
    return exports.bindScope(scope, fn).apply(this, args);
  },
  bindScope: function(scope, fn) {
    var body, keys;
    scope.__scope = scope;
    keys = Object.keys(scope);
    body = cleanCoffeeScriptVars(keys, fn.toString());
    return Function.apply(null, keys.concat(["return " + body + ";"])).apply(null, keys.map(function(key) {
      return scope[key];
    }));
  }
};

isCoffeeScriptGenerated = /^function[\s]*\([^\)]*\)[\s]*\{[\s\n]*var /;

cleanCoffeeScriptVars = function(keys, fn) {
  var statement;
  if (isCoffeeScriptGenerated.test(fn)) {
    statement = VarStatement.first(fn);
    fn = statement.remove.apply(statement, keys);
  }
  return fn;
};

//# sourceMappingURL=map/index.map
