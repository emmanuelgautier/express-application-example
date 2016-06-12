'use strict';

module.exports = (config) => {
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    mongoose.connect(config.db.uri);

    return {
        Article: mongoose.model('Article', require('./Article')(Schema))
    };
};
