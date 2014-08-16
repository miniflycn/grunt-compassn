'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      test: [
        'test/*.css'
      ]
    },
    compass: {
      main: {
        options:{
          outputStyle: 'compressed'
        },
        files: [
          {expand: true, cwd: 'test/scss', src: ['*.scss', '!_*.scss'], dest: 'test/'},
        ]
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'compass', 'nodeunit', 'clean']);
  // By default, run all tests
  grunt.registerTask('default', ['test']);
};