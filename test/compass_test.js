'use strict';
var fs = require('fs')
  , grunt = require('grunt');

exports.compass = {
  compile: function (test) {
    test.expect(1);
    test.equal(
      grunt.file.read('test/compile.css'),
      grunt.file.read('test/css/compile.css'), 
      'should compile Sass to CSS using Compass'
    );
    test.done();
  }
};
