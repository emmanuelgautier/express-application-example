'use strict';

module.exports = (models) => {
    return {
        home: require('./home')(models),
        articles: require('./articles')(models)
    };
};
