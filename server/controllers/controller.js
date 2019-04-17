const joi = require('joi');
const boom = require('boom');



//Defining a sample a GET method API
//http://localhost:3000/api/test_GET_method_API?message=HelloWorld
const test_GET_method_API = function(req, res, next) {
	//Defining the schema to validate the requested data from either by GET method or POST method
	const schema = joi.object().keys({
		'message': joi.string().required(),
	});

	//Validate the request data against the schema
	joi.validate(req.query, schema, (err, value) => {
		if (err) {
			//If request validation failes returns error -
			return res.status(400).send(boom.badImplementation(err));
		} else {
			// -------- Here will be your API logic goes --------//

			//Final response of the API
			return res.status(200).send({
				'status': true,
				'data': req.query.message,
				'msg': '',
			});
		}
	});
}


//Defining a sample a POST method API
//http://localhost:3000/api/test_POST_method_API
//with body data JSON : {"message":"Hello World"}
const test_POST_method_API = function(req, res, next) {
	//Defining the schema to validate the requested data from either by GET method or POST method
	const schema = joi.object().keys({
		'message': joi.string().required(),
	});

	//Validate the request data against the schema
	joi.validate(req.body, schema, (err, value) => {
		if (err) {
			//If request validation failes returns error -
			return res.status(400).send(boom.badImplementation(err));
		} else {
			// -------- Here will be your API logic goes --------//

			//Final response of the API
			return res.status(200).send({
				'status': true,
				'data': req.body.message,
				'msg': '',
			});
		}
	});
}

module.exports.routes = [{
		'method': 'get',
		'url': 'test_GET_method_API',
		'function': test_GET_method_API,
	},
	{
		'method': 'post',
		'url': 'test_POST_method_API',
		'function': test_POST_method_API,
	},
];