
require "lotus-require"
VarStatement = require "var-statement"

withScope = (scope, fn) ->
  (bindScope scope, fn)()

bindScope = (scope, fn) ->
  scope.__scope = scope
  keys = Object.keys scope
  body = cleanCoffeeScriptVars keys, fn.toString()
  Function
    .apply null, keys.concat ["return #{body};"]
    .apply null, keys.map (key) -> scope[key]

module.exports = { withScope, bindScope }

isCoffeeScriptGenerated = /^function[\s]*\([^\)]*\)[\s]*\{[\s\n]*var /

cleanCoffeeScriptVars = (keys, fn) ->

  if isCoffeeScriptGenerated.test fn
    statement = VarStatement.first fn
    fn = statement.remove keys

  return fn
