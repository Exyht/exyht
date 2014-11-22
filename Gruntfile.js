module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify','jshint', 'qunit'],
                options: {
                    spawn: false,
                },
            } 
        },
        qunit: {
           files: ['js/*.js']
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    //cwd: 'images/',
                    src: ['libraries/js/*.{png,jpg,gif}'],
                    dest: 'libraries/'
                }]
            }
        },
        // Deletes all .js files
        clean: {
            js: ["libraries/js/build"]
        },*/

        /*
         * Minify css libraries
        */
        cssmin: {
            appcss: {
                src: ['libraries/css/blog.css', 'libraries/js/js-emoji/emoji.css'],
                dest: 'build/app-css.min.css',
            },
            admincss: {
                src: ['libraries/css/sb-admin-2.css', 'libraries/js/js-emoji/emoji.css'],
                dest: 'build/admin-css.min.css',
            }
        },
        /*
         * Check for lint in Javascript files
        */
        jshint: {
            app: {
                src: ['build/production-app.js'],
                options: {
                // options here to override JSHint defaults
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true,
                        document: true
                    }
                }
            },
            adminapp: {
                src: ['build/admin-production-app.js'],
                options: {
                // options here to override JSHint defaults
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true,
                        document: true
                    }
                }
            }
        },
        /*
         * Concat js files
        */
        concat: {
            // 2. Configuration for concatinating files goes here.
            app: {
                src: [
                    'js/*.js',
                    'js/**/*.js'
                ],
                dest: 'build/production-app.js',
            },
            adminapp: {
                src: [
                    'admin-js/*.js',
                    'admin-js/**/*.js'
                ],
                dest: 'build/admin-production-app.js',
            },
            appjslib: {/*
                options: {
                    separator: ';',
                },*/
                src: [
                    'libraries/js/jquery-1.10.2.min.js',
                    'libraries/js/js-emoji/emoji.min.js',
                    'libraries/js/moment-v2.8.3.min.js',
                    'libraries/js/moment-timezone.min.js',
                    'libraries/js/jstz-1.0.4.min.js',
                    'libraries/js/bootstrap.min.js',
                    'libraries/js/handlebars.runtime-v1.3.0.min.js',
                    'libraries/js/ember.min.js',
                    'libraries/js/Markdown.Converter.min.js',
                    'libraries/js/Markdown.Sanitizer.min.js',
                    'libraries/js/html-sanitizer.min.js',
                    'libraries/js/crypto-md5-v3.1.2.min.js',
                    'libraries/js/jquery.textcomplete.min.js',
                    'libraries/js/emojies_list.js',
                    'libraries/js/quick_words.js',
                    '!libraries/js/metisMenu.min.js',
                    '!libraries/js/sb-admin-2.min.js',
                ],
                dest: 'build/app-lib.min.js',
            },
            adminappjslib: {
                src: [
                    'libraries/js/jquery-1.10.2.min.js',
                    'libraries/js/js-emoji/emoji.min.js',
                    'libraries/js/sb-admin-2.min.js',
                    'libraries/js/metisMenu.min.js',
                    'libraries/js/bootstrap.min.js',
                    'libraries/js/handlebars.runtime-v1.3.0.min.js',
                    'libraries/js/ember.min.js',
                    'libraries/js/Markdown.Converter.min.js',
                    'libraries/js/Markdown.Sanitizer.min.js',
                    'libraries/js/html-sanitizer.min.js',
                    'libraries/js/jquery.textcomplete.min.js',
                    'libraries/js/emojies_list.js',
                    'libraries/js/quick_words.js',
                    '!libraries/js/moment-timezone.min.js',
                    '!libraries/js/moment-v2.8.3.min.js',
                ],
                dest: 'build/admin-lib.min.js',
            }
        },
        /*
         * Minify js files
        */
        uglify: {
            app: {
                files: {
                    'build/production-app.min.js': 'build/production-app.js',
                } 
            },
            adminapp: {
                files: {
                    'build/admin-production-app.min.js': 'build/admin-production-app.js',
                }
            },
            apptemplate: {
                files: {
                    'build/templates.min.js': 'build/templates.js',
                }
            },
            admintemplate: {
                files: {
                    'build/admin-templates.min.js': 'build/admin-templates.js',
                }
            }
        },
        /*
         * Compile Ember Template
        */
        emberTemplates: {
            app: {
                options: {
                    amd: false,
                    templateBasePath: /templates/
                },
                files: {
                    "build/templates.js": "templates/*.hbs"
                }
            },
            adminapp: {
                options: {
                    amd: false,
                    templateBasePath: /admin-templates/
                },
                files: {
                    "build/admin-templates.js": "admin-templates/*.hbs"
                }
            }
        },/*
        htmlhintplus: {
            html1: {
                rules: {
                    'tag-pair': true
                },
                django: false,
                src: ['app/views/layout/noscript.blade.php']
            }
        }*/
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ember-templates');
    //grunt.loadNpmTasks('grunt-htmlhint-plus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    // minify emoji image
    //grunt.registerTask('minify-emoji', ['imagemin']);
    // minify css files
    grunt.registerTask('app-css', ['cssmin:appcss']);
    grunt.registerTask('admin-css', ['cssmin:admincss']);
    // concat js libraries
    grunt.registerTask('app-js-lib', ['concat:appjslib']);
    grunt.registerTask('admin-js-lib', ['concat:adminappjslib']);
    // make production app
    grunt.registerTask('prod-app', ['concat:app', 'jshint:app', 'uglify:app']);
    // make production app for admin
    grunt.registerTask('prod-admin-app', ['concat:adminapp', 'jshint:adminapp', 'uglify:adminapp']);
    // Compile template
    grunt.registerTask('app-template', ['emberTemplates:app', 'jshint:app', 'uglify:apptemplate']);
    grunt.registerTask('admin-template', ['emberTemplates:adminapp', 'jshint:adminapp', 'uglify:admintemplate']);

};