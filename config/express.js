var express = require("express")
	, methodOverride = require("method-override")
	, bodyParser = require("body-parser")
	, cookieParser = require("cookie-parser")
	, session = require("express-session")
	, load = require("express-load")
;

module.exports = function(){
  var app = express();
	app.set("port", 3000);
  

  //using the express middlewares
	app.use(express.static("./public"));
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	load("models",{cwd:"app"})
	.then("controllers")
	.then("routes")
	.into(app);

	return app;
};
