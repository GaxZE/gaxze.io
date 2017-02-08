var mozjpeg = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');

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
        },
        imagemin: {
            dynamic: {
                options: {
                    progressive:  true,
                    use: [mozjpeg(), pngquant()]
                },
                files: [{
                    expand: true,
                    cwd: 'assets/images',
                    src: ['**/*.{jpg,jpeg,png}'],
                    dest: 'source/images'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['copy', 'cssmin', 'uglify', 'imagemin']);
};
