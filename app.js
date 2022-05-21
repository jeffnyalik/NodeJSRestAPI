const express = require('express');
const app = express();
const postsRouter = require('./routes/posts/posts.route');
const userRouter = require('./routes/users/users.route');
const paypalRouter = require('./routes/paypal/paypal.route');
const { createLogger, transports } = require('winston');
const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'app.log'})
    ]
});
const dotenv = require('dotenv');
dotenv.config();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//end

// use routes
app.use('/api/posts', postsRouter);
app.use('/api/users', userRouter);
app.use('/api', paypalRouter);
//
module.exports = logger;
module.exports = app;