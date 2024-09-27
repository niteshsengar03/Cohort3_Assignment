const express = require('express');
const jwt = require('jsonwebtoken');
const {UserModel,TodoModel} = require('./db');
const {auth,JWT_SECRET} = require('./auth');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.post('/signup',async function(req, res)  {
    const {email,password,name} = req.body;

    try{
    //Hashing password 
    // 5 is kitni baar hash krwani so it become difficult to bruteForce
    const hashedPassword = await bcrypt.hash(password,5);
    await UserModel.create({
        email:email,
        password:hashedPassword,
        name:name
    })
    return res.json({
        message:"You are logged in"
    })}catch(e){
        return res.status(403).json({
            message:"User alerady exists"
        })
    }
});

app.post('/login',async function(req,res){
    const {email,password} = req.body;

    // if it doesn't find the user, it will return null
    const user = await UserModel.findOne({
        email:email
    })
    // First check if user's email is there in database
    if(!user){
        return res.status(403).json({
            message:"User does not exist in our db"
        })
    }

    // now check the password
    const passwordMatch = await bcrypt.compare(password,user.password);  // if password is mathched then it stores true else false

    if(passwordMatch){
        const token = jwt.sign({
            id: user._id
        },JWT_SECRET);
        res.json({
            token:token
        }) 
    }
    else{
        res.status(403).json({
            message:"incorrect Password"
        })
    }
})

app.post('/todo',auth,function(req,res){
    return res.json({
        msg:"hi there" + req.user
    })
})

app.get('/todos',function(req,res){

})
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});