'use strict';

module.exports = () => {
    const config = require('./config')();
    const domain = require('./domain')(config);
    const app = require('./app')(config, domain);
};
