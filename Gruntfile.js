'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      main: {
        options:{},
        files: [
          {expand: true, cwd: 'test/scss', src: ['*.scss'], dest: 'test/css/'},
        ]
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['compass']);
  // By default, run all tests
  grunt.registerTask('default', ['test']);
};