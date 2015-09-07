var jwt = require("jwt-simple")
  , secret = "I'm a rockstar, baby! and you don't will discover this";

module.exports = function(app){
  var controller = {};
	var user = app.models.users;

	controller.ensureAuthorized = function (req, res, next, app){

			var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers ["x-access-token"];

			if(token){
				  try {
					  var decoded = jwt.decode(token, secret);
					  console.log("decoding " + decoded);

					  if(decoded.exp <= Date.now()){
					  	res.json(400, { error: "Access expired, do the login again!"});
					  }

					user.findOne({"_id": decoded.iss}, function(err, user){
						if(err){ 
					    console.log("user not found!");
					    res.status(500).json({"message": "User not found with this token!"});
						}
						req.user = user;
						console.log(" I found this user "+ req.user);
						return next();
					 });

				 }
			   catch(err){
				    return res.status(401).json({"message": "Invalid token!"});
				}
			}
			else{
				 res.status(401).json({"message": "Not Authorized!"});
			}
	  };

	 return controller;
}
