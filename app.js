const express = require('express');
const app = express();
var morgan = require('morgan');
const {createConnection} = require('./database/connection');
// createConnection();

app.use(express.json());
app.use(morgan('dev'));

app.get('/check', (req, res)=>{
    res.send("Server is running...");
});

APIRouter = express.Router();
APIRouter.get('/', (req, res)=>{
    res.send('API is running ... ');
});

app.use('/api', APIRouter);

module.exports = {app};