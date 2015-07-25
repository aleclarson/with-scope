
require "lotus-require"
VarStatement = require "var-statement"

exports = module.exports =

  withScope: (scope, args..., fn) ->
    exports.bindScope(scope, fn).apply this, args

  bindScope: (scope, fn) ->
    scope.__scope = scope
    keys = Object.keys scope
    body = cleanCoffeeScriptVars keys, fn.toString()
    Function
      .apply null, keys.concat ["return #{body};"]
      .apply null, keys.map (key) -> scope[key]

isCoffeeScriptGenerated = /^function[\s]*\([^\)]*\)[\s]*\{[\s\n]*var /
cleanCoffeeScriptVars = (keys, fn) ->
  if isCoffeeScriptGenerated.test fn
    statement = VarStatement.first fn
    fn = statement.remove.apply statement, keys
  fn

##
## OLD IMPLEMENTATION
##

# pre = "return function ("
# mid = ") { return "
# post = "; }"
# keys = keys.join ", "
# fn = [pre, keys, mid, fn, post].join ""
# fn = js_beautify fn, indent_size: 2
# init = Function(fn)
# fn = init().apply null, values
# fn.call this
