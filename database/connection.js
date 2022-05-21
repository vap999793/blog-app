const mongoose = require('mongoose');
const {DB_URL} = process.env;

function createConnection(){
    
    const connection = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    if(connection){
        console.log("MongoDB Connected ... ");
    }
    else{
        console.log("Error in making connection")
    }
}

module.exports = {createConnection};