const userRouter = require('express').Router();

userRouter.get('/', (req, res)=>{
    return res.json({"Message" : "User Router is working"});
});

module.exports = {userRouter};