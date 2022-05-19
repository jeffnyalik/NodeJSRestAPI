const { createLogger, transports, format } = require('winston');
const customFormat = format.combine(format.timestamp(), format.printf((info) =>{
    return `${info.timestamp}-[${info.level.toUpperCase().padEnd(3)}]-${info.message}`
}));
const logger = createLogger({
    format: customFormat,
    transports: [
        new transports.Console({level: this.silly}),
        new transports.File({filename: 'app.log', level: this.info})
    ]
});

module.exports = logger;