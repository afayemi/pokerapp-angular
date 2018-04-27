const express = require('express');
const webpack = require('webpack');
const config = require('../../webpack.config');
const path = require('path');
const proxyBuilder = require('./proxyBuilder');
const devMiddleware = require('webpack-dev-middleware');

const compiler = webpack(config);
/*eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}
));

proxyBuilder(app);

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(`server is litening on port ${port}`);
	}
});
