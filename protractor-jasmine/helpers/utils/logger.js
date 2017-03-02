'use strict';

const logDir = require('path').join(__dirname, '..', '..', 'reports', 'debug.log');

var winston = require('winston');
var logger = new winston.Logger({
    level: 'debug',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            name: 'debug-log',
            filename: logDir,
            level: 'debug'
        })
    ]
});
module.exports = logger;

