"use strict";
var app = require("../../config/express")(app)
	, should = require("should")
	, request = require("supertest")(app);


describe("Routing", function(){
	
	describe("the students route", function(){
		it("should return status 401 when makes get at /students without authentication", function(done){
				request.get("/students")
				.expect(401)
				.end(function(err, res){
					if (err) throw err;
					res.status.should.eql(401);
				});

				done();
		});
		
	});

	describe("the users route", function(){
		it("should return status 200 when makes get at /users", function(done){
				request.get("/users")
				.expect(200)
				.end(function(err, res){
					if(err) throw err;
					res.status.should.eql(200);
				});
				done();
		});
	});

});
