const express = require('express');
const app = express();
var morgan = require('morgan');
const {createConnection} = require('./database/connection');
// createConnection();
const {userRouter} = require('./routers/routers');

app.use(express.json());
app.use(morgan('dev'));

app.get('/check', (req, res)=>{
    res.send("Server is running...");
});

APIRouter = express.Router();
app.use('/api', APIRouter);

APIRouter.get('/', (req, res)=>{
    res.send('API is running ... ');
});

APIRouter.use('/users', userRouter);


module.exports = {app};