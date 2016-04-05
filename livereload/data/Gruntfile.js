module.exports = function(grunt) {


    grunt.initConfig({

        concurrent: {
          dev:{
              tasks: ['watch'],
              options: {
                  logConcurrentOutput: true
              }
          }
        },

        watch: {

            js: {
              //  tasks: ['build:debug'],
                options: {
                    livereload:true
                },

                files:['/var/www/html/website/js/**/*']
            },

            css: {
                //  tasks: ['build:debug'],
                options: {
                    nospawn: true,
                    livereload:true
                },

                files:['/var/www/html/website/css/*']
            }

        }



    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask( 'default', [

        'concurrent'
       // 'watch'

       // 'clean',
   //     'jshint',
       // 'concat',
      //  'uglify',
      //  'sprite',
       // 'cssmin'

    ] );

    grunt.registerTask('js', 'Concatenate and minify static JavaScript assets', [

        'concat:js',
        'uglify:bundle'

    ]);
    grunt.registerTask('test', 'Testing', ['browserify']);


};

