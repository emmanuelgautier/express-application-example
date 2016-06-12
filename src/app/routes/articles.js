'use strict';

module.exports = (handler) => {

    const express = require('express');
    const router = express.Router();

    router.get('/', handler.$index);
    router.get('/:id', handler.$get);
    router.post('/', handler.$post);

    return router;
};
