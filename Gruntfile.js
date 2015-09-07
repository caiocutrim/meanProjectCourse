var grunt = require("grunt");

module.exports = function(grunt){

	grunt.initConfig({
		copy: {
			project:{
				expand: true, //to active the dynamic mapping of the file
				cwd: ".",  //"the current directory"
				src: ["**", "!Gruntfile.js", "!package.json", "!public/libs"], //the target file and ignored files
				dest: "dist" // the destine directory
			}
		},
		clean: {
			dist: {
				src: "dist"
			}
		},
		nodemon:{
			dev: {
				script: "server.js",
				options:{ 
					ignore: ["node_modules/**/**", "public/**/**/**"]
				}
			}
		},
		browserSync:{
			dev:{
				bsFiles:{
				  src:"public/**/**",
				},	
				options:{
					proxy: "http://localhost:3000",
				}
			}
		}
	});


  var tasks = ["grunt-contrib-copy", "grunt-contrib-clean", "grunt-nodemon","grunt-browser-sync"];
	tasks.forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	grunt.registerTask("dist", ["clean", "copy"]);
	grunt.registerTask("sync", ["browserSync"]);
	grunt.registerTask("server", ["nodemon"]);

}
