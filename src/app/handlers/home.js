'use strict';

module.exports = (models) => {

    return function (req, res, next) {
        res.render('index', {title: 'Express'});
    }
};
