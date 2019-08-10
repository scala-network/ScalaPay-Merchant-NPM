const request = require('request');

exports.login = credentials => {
    var RequestHandler = require('./lib/requestHandler');
    var Config = require('./lib/config');

    return new RequestHandler(new Config(credentials));
}