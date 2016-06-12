'use strict';

module.exports = (Schema) => {
    var Article = new Schema({
        title: String,
        content: String,
        date: {type: Date, default: Date.now}
    });

    return Article;
};
