var express = require("express")
	, methodOverride = require("method-override")
	, bodyParser = require("body-parser")
	, load = require("express-load")
	, morgan = require("morgan")
;

module.exports = function(){
  var app = express();
	app.set("port", 3000);
  

  //using the express middlewares
	app.use(express.static("./public"));
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(morgan("dev"));

	app.use(function(req, res, next){
		res.setHeader("Acess-Control-Allow-Origin", "*");
		res.setHeader("Acess-Control-Allow-Methods", "GET", "POST")
		res.setHeader("Acess-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
		next();
	});

	load("models",{cwd:"app"})
	.then("services")
	.then("controllers")
	.then("routes")
	.into(app);

	return app;
};
