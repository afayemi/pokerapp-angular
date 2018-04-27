const proxy = require('express-http-proxy');
const _ = require('lodash');

const apiMap = {
	'poker-game' : {
    uri : 'localhost:8443',
    https: true
  }
};

function proxyBuilder(expressApp) {
    _.forEach(apiMap, ({uri, extraParams, https}, apiUrl) => {
        expressApp.use(`/api/${apiUrl}`, proxy(uri, {
			https,
            proxyReqOptDecorator: function(requestOptions) {
                _.merge(requestOptions, extraParams);
                return requestOptions;
            }

        }));
    });
}

module.exports = proxyBuilder;
