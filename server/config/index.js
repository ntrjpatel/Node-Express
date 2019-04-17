//Define configuration if required any like database configuration
const config = {
	storage: {},
	server: {
		connections: [{
			port: 3000,
			routes: {
				cors: true
			},
			router: {
				stripTrailingSlash: true
			}
		}],
	},
};

module.exports = config;