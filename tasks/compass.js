'use strict';

module.exports = function (grunt) {

  var compass = require('compass-node')
    , EOL = '\n';

  grunt.registerMultiTask('compass', 'Compile compass', function () {
    var options = this.options();
    var done = this.async();

    grunt.verbose.writeflags(options, 'Options');

    var l = this.files.length;

    this.files.forEach(function (f) {
      var filepath = f.src[0];
      compass.render(filepath, {
        success: function (css) {
          grunt.file.write(f.dest, css);
          grunt.log.writeln('File "' + f.dest + '" created.');
          if (!(--l)) {
            done();
          }
        },
        error: function (error) {
          console.log(error);
        }
      });
    });
  });
};