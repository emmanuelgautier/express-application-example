'use strict';

module.exports = (handler) => {
    const express = require('express');
    const router = express.Router();

    router.get('/', handler);

    return router;
};
