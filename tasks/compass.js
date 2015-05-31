'use strict';

module.exports = function (grunt) {

  var compass = require('compass-node')
    , EOL = '\n';

  grunt.registerMultiTask('compass', 'Compile compass', function () {
    var options = this.options()
      , done = this.async()
      , l = this.files.length;

    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function (f) {
      var fileOptions = JSON.parse(JSON.stringify(options));
      var filepath = f.src[0];
      fileOptions.success = function (css) {
        f.dest = f.dest.replace(/.scss$/, '.css');
        grunt.file.write(f.dest, css.css);
        grunt.log.writeln('File "' + f.dest + '" created.');
        if (!(--l)) {
          done();
        }
      };
      fileOptions.error = function (error) {
        grunt.log.error(error.message);
      };
      compass.render(filepath, fileOptions);
    });
  });
};
