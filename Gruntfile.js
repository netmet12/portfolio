/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
         sizes: [{
          name: 'large',
          width: 1024,
          suffix: "_1x",
          quality: 40
        },{
          name: "large",
          width: 1024,
          suffix: "_2x",
          quality: 80
        },
        ,{
          name: "small",
          width: 720,
          suffix: "_1x",
          quality: 50
        },{
          name: "small",
          width: 720,
          suffix: "_2x",
          quality: 80
        }]
      },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/',
          dest: 'images/'
        }]
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task.
  grunt.registerTask('default', ['responsive_images']);

};
