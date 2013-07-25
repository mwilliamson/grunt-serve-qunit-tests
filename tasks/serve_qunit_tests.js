module.exports = function(grunt) {
  grunt.registerMultiTask("serve-qunit-tests", "Server qunit tests", function() {
    var options = this.options();
    require("./lib/server").startServer({
        port: options.port,
        dependencies: options.dependencies,
        tests: this.filesSrc
    });
  });
};
