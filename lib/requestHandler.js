const request = require('request');

module.exports = RequestHandler;

function RequestHandler(credentials){
    this.token      = credentials.token;
    this.header     = { 'Content-Type':'application/json' };
    this.url        = "https://api.scalapay.io";
}

/**
 * Tests the Merchant token
 */
RequestHandler.prototype.testAccess = function testAccess(callback) {
    if(this.token == null)
        return callback(new Error("Token not set"));

    var options = {
        url: this.url + '/public/v1/test',
        headers: this.header,
        method: 'POST',
        form: {
            token: this.token
        }
    };

    function cb(error, response, body) {
        if(error || response.statusCode != 200)
            return callback(error);
        
        return callback(null, body);
    }
       
    request.post(options, cb);
};

/**
 * Generates a new integrated address
 */
RequestHandler.prototype.generateAddress = function generateAddress(callback) {
    if(this.token == null)
        return callback(new Error("Token not set"));

    var options = {
        url: this.url + '/public/v1/addintegrated',
        headers: this.header,
        method: 'POST',
        form: {
            token: this.token
        }
    };

    function cb(error, response, body) {
        if(error || response.statusCode != 200)
            return callback(error);
        
        return callback(null, body);
    }
       
    request.post(options, cb);
};

/**
 * Transfers $XLA from the merchant account to address
 * @param {address} address of the receiver (incl. ScalaPay registered user address)
 * @param {amount} amount of 1 = 0.01 XLA
 */
RequestHandler.prototype.transfer = function transfer(address, amount, callback) {
    if(this.token == null)
        return callback(new Error("Token not set"));

    var options = {
        url: this.url + '/public/v1/transfer',
        headers: this.header,
        method: 'POST',
        form: {
            token: this.token,
            address: address,
            amount: amount
        }
    };

    function cb(error, response, body) {
        if(error || response.statusCode != 200)
            return callback(error);
        
        return callback(null, body);
    }
       
    request.post(options, cb);
};
