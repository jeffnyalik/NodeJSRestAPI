const express = require('express');
const app = express();
const postsRouter = require('./routes/posts/posts.route');
const userRouter = require('./routes/users/users.route');
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

app.get('/', (req, res) =>{
    res.status(200).send({message: 'WORKING'});
})
// use routes
app.use('/api/posts', postsRouter);
app.use('/api/users', userRouter);
//
module.exports = logger;
module.exports = app;