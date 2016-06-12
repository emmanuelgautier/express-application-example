'use strict';

module.exports = (app, config, handlers) => {
    const express = require('express');
    const router = express.Router();

    app.use('/', require('./home')(handlers.home));
    app.use('/articles', require('./articles')(handlers.articles));
};
