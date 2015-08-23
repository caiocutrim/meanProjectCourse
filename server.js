var app = require("./config/express")(app);


app.get("/home", function(req,res){
	res.json({"msg": "Hello world! from api"});
});


app.listen(app.get("port"), function(){
	console.log("* listening on:"+app.get("port"));
});
