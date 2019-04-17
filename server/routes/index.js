const routes = require('express').Router();
let all_routes = {};
const controller = require('../controllers/controller');


all_routes = Array.prototype.concat(
	controller.routes,
);

try {
	if (all_routes.length > 0) {
		all_routes.forEach(function(item) {
			switch (item.method) {
				case 'get':
				case 'GET':
					routes.get('/api/' + item.url, item.function);
					break;

				case 'post':
				case 'POST':
					routes.post('/api/' + item.url, item.function);
					break;

				default:
					throw new error('Invalid method provided');
					break;
			}
		});
	}
} catch (e) {
	console.log('Got an error =' + e);
}

module.exports = routes;