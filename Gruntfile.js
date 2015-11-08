module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                include: 'build/include/scripts.html'
            },
            build_js: {
                src: ['bower_components/jquery/dist/jquery.min.js',
                      'bower_components/webcomponentsjs/webcomponents.min.js',
                      'node_modules/angular/angular.min.js',
                      'node_modules/angular/angular-ui-router.min.js',
                      'node_modules/angular/sanitize.js',
                      'src/js/app.js','src/js/angularDirectives.js', 'polymerDirectives.js', 'src/js/controllers'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};