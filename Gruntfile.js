/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    replace: {
      another_example: {
        src: ['public/**/*.html'],
        overwrite: true,
        replacements: [{
          from: /v=[0-9]\-[0-9]\-[0-9]/g,
          to: 'v=0-1-0' //adds version number to bust cache on html and css
        }]
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: 'Handlebars.templates',
          wrapped: true,
          processName: function(name) {
            console.log(name.split('/').pop().split('.')[0]);
            return name.split('/').pop().split('.')[0];
          },
          processPartialName: function(name) {
            console.log('partial:' + name.split('/').pop().split('.')[0]);
            return name.split('/').pop().split('.')[0];
          }
        },
        files: {
          'public/build/hbs.compiled.js': 'public/modules/**/*.hbs'
        }
      }
    },

    cssmin: {
      index: {
        files: {
          'public/build/index.min.css': [
            //CSS libraries used on this page
            'public/libraries/thirdparty/normalize-css/normalize.css',
            'public/libraries/customTwitterBootstrap/bootstrapBase.css',
            'public/libraries/thirdparty/font-awesome/css/font-awesome.css',
            //global css file
            'public/globals.css',
            //CSS module used on this page
            'public/modules/moduleA/moduleA.css',
            'public/modules/moduleB/moduleB.css',
            'public/modules/moduleC/moduleC.css'
          ]
        }
      }
    },

    uglify: {
      index: {
        src: [
          'public/libraries/thirdparty/jquery/jquery.js',
          'public/libraries/thirdparty/lodash/lodash.js',
          'public/libraries/thirdparty/modernizr-latest/index.js',
          'public/libraries/thirdparty/string.js/lib/string.js',
          'public/libraries/thirdparty/director/build/director.js',
          'public/libraries/thirdparty/handlebars.js/dist/handlebars.runtime.js',
          'public/libraries/getHandleBarsTemp/getHandleBarsTemp.js',
          //NOTICE we are placing all handlerbar templates for everypage here
          'public/build/hbs.compiled.js',
          //global file
          'public/globals.js',
          //Modules used on this page
          'public/modules/moduleA/moduleA.js',
          'public/modules/moduleB/moduleB.js',
          'public/modules/moduleC/moduleC.js',
          //run index.html
          'public/run/index.run.js'
        ],
        dest: 'public/build/index.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['handlebars','cssmin','uglify','replace']);

};
