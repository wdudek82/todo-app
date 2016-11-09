module.exports = function(grunt) {
	// grunt.registerTask('speak', function() {
	// 	console.log("I'm speaking.");
	// });
	// grunt.registerTask('yell', function() {
	// 	console.log("I'm YELLING!");
	// });
	// grunt.registerTask('default', ['speak', 'yell']);


	// Project configuration. 
	grunt.initConfig({
		concat: {
			js: {
				src: ['js/custom.js', 'js/grunt_test.js'],
				dest: 'build/js/scripts.js',
			},
			css: {
				src: ['css/style.css'],
				dest: 'build/css/styles.css',
			},
		},

		uglify: {
			my_target: {
				files: {
					'build/js/scripts.min.js': ['build/js/scripts.js'],
					// 'build/css/styles.min.css': ['build/css/styles.css']
				}
			}
		},

		watch: {
			js: {
				files: ['js/**/*.js'],
				tasks: ['default'],
			},
			css: {
				files: ['css/**/*.css'],
				tasks: ['default'],
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};
