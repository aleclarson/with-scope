
withScope = module.exports = (scope, fn) ->

  keys = Object.keys scope

  values = keys.map (key) -> scope[key]

  keys.push "__scope"

  values.push scope

  fn = cleanCoffeeScriptVars fn.toString()

  keys.push "(#{fn})()"

  global._keys = keys

  scope = Function.apply null, keys

  return scope.apply null, values

############################
### CoffeeScript support ###
############################

VarStatement = null

isCoffeeScriptGenerated = /^function[\s]*\([^\)]*\)[\s]*\{[\s\n]*var /

cleanCoffeeScriptVars = (fn) ->
  if isCoffeeScriptGenerated.test fn
    VarStatement ?= require "../../../var-statement"
    statement = VarStatement.first fn
    fn = statement.remove.apply statement, keys
  fn
