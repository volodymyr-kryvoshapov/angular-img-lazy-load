module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/angular-img-lazy-load.min.js': 'src/angular-img-lazy-load.js'
                }
            }
        }
    });


    grunt.registerTask("default", ["uglify"]);
};