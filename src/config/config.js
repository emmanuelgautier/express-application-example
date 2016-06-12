'use strict';

module.exports = () => {
    var env = require('common-env')();
    var configAsJson = require('./config.json');
    return env.getOrElseAll(configAsJson);
};
