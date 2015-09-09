module.exports = function(grunt){
	grunt.initConfig({
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
					ignore:["dist/","public/**/**", "node_modules/**/**"],
				}
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

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-nodemon");
	grunt.loadNpmTasks("grunt-browser-sync");

	grunt.registerTask("sync", ["browserSync"]);
	grunt.registerTask("default", ["copy"]);
	grunt.registerTask("serve", ["nodemon"]);

}
