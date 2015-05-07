
config = {}

config.watch =

  options:
    spawn: true

  src:
    files: ["src/**/*.coffee"]
    tasks: ["coffee:src"]

  spec:
    files: ["spec/**/*.coffee"]
    tasks: ["coffee:spec"]

config.coffee =

  options:
    sourceMap: true

  src:
    expand: true
    cwd: "src"
    src: ["**/*.coffee"]
    dest: "js/src"
    ext: ".js"
    options:
      sourceMapDir: "js/src/map"

  spec:
    expand: true
    cwd: "spec"
    src: ["**/*.coffee"]
    dest: "js/spec"
    ext: ".js"
    options:
      sourceMapDir: "js/spec/map"

module.exports = (Grunt) ->
  require("load-grunt-tasks")(Grunt)
  Grunt.initConfig config
  Grunt.registerTask "default", ["coffee", "watch"]
