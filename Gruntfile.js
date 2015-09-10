module.exports = function(grunt){
	grunt.initConfig({
		watch:{
			files:["test/spec-backend/**"],
			tasks:["mochaTest"]
		},
		copy:{
			project:{
				expand: true,
				cws:".",
				src:["**", "!Grunfile.js", "!package.json", "!public/libs"],
				dest: "dist"
			}

		},
		nodemon:{
			dev:{
				script: "server.js",
				options:{
					ignore:["test/**/**","dist/","public/**/**", "node_modules/**/**"],
				}
			}
		},
		mochaTest:{
			test:{
				src:"test/spec-backend/**.js"
			}
		},
		browserSync:{
		 bsFiles:{
			 src:"public/**/**"
		 },
		 options:{
			 proxy: "localhost:3000"
		 }
		}
	});

  tasks = [
		"grunt-contrib-copy", 
		"grunt-nodemon", 
		"grunt-browser-sync", 
		"grunt-mocha-test",
		"grunt-contrib-watch"
	];

	tasks.forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	grunt.registerTask("sync", ["browserSync"]);
	grunt.registerTask("serve", ["nodemon"]);
	grunt.registerTask("tests", ["mochaTest", "watch"]);

}
