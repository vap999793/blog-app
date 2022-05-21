require('dotenv').config();
const {app} = require('./app');

app.listen(process.env.PORT || 3000, (err)=>{
    console.log(`Server is running at PORT : ${process.env.PORT}`);
});