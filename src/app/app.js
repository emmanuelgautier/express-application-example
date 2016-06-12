'use strict';

module.exports = (config, models) => {
    const express = require('express');
    const path = require('path');
    const favicon = require('serve-favicon');
    const cookieParser = require('cookie-parser');
    const bodyParser = require('body-parser');

    var app = express();

    var handlers = require('./handlers')(models);

    require('./routes')(app, config, handlers);

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    // uncomment after placing your favicon in /public
    // app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(require('node-compass')({mode: 'expanded'}));
    app.use(express.static(path.join(__dirname, '../public')));

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    return app.listen(config.app.port);
};
