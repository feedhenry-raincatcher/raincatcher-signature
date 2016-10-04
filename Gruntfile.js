module.exports = function(grunt) {
  'use strict';
  grunt.loadNpmTasks('grunt-fh-build');
  grunt.registerTask('default', ['eslint']);
};
