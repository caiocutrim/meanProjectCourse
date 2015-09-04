var jwt = require("jwt-simple");
var moment = require("moment");
var secret = "I'm a rockstar, baby!";

module.exports = function(app){
	var User = app.models.users;
	var loginController = {};
	loginController.login = function(req, res){
		var username = req.body.username;
		var password = req.body.password;
    User.findOne({username: username}, function(err, user){
		  if(err){
				return res.json(401, err);
			}				
			user.verifyPassword(password, function(isMatch){
				if(!isMatch){
					console.log("Attempt failed to login with "+ user.username);
					return res.send(401);
				}
				var expires = moment().add(7, "days").valueOf();
				var token = jwt.encode({
					iss: user.id,
					name: user.name,
					exp: expires
				}, secret);

				return res.json({
					token: token,
					expires: expires,
					user: user.toJSON()
				});
			});
		});
	};

	return loginController;
}
