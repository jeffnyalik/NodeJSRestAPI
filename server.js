const http = require('http');
const app = require('./app');
const logger = require('./logger');
const port = 3000;

const server = http.createServer(app);
server.listen(port, () =>{
    logger.info(`Server IS running on port ${port}`);
});