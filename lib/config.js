/**
 * Store merchant token
 * @param {object} credentials for merchant api
 */
function ConnectionConfig(credentials) {
    this.token = credentials.token;
}

module.exports = ConnectionConfig;
