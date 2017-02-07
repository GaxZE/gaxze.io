module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            components: {
                cwd: 'vendor/bower_components',
                src: '**/*',
                dest: 'source/components',
                expand: true
            }
        },
        cssmin: {
            "garyhawes": {
                src: 'assets/css/garyhawes.css',
                dest: 'source/css/garyhawes.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'source/js/garyhawes.min.js': ['assets/js/garyhawes.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy', 'cssmin', 'uglify']);
};
