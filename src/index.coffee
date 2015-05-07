
withScope = module.exports = (scope, fn) ->

  keys = Object.keys scope

  values = keys.map (key) -> scope[key]

  keys.push "__scope"

  values.push scope

  keys.push "(" + fn.toString() + ")()"

  scope = Function.apply null, keys

  return scope.apply null, values
