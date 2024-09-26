const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "HII";
const {UserModel,TodoModel} = require('./db');
const app = express();
const port = 3000;

app.use(express.json());


function auth(req, res, next) {
    const token = req.headers.authorization;
    try{
    const response = jwt.verify(token, JWT_SECRET);
        req.user = response.id;
        next();
    } catch(e) {
        return res.status(403).json({
            message: "Incorrect creds"
        })
    }
}
// Routes
app.post('/signup',async function(req, res)  {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name:name
    })
    res.json({
        message:"You are logged in"
    })
});

app.post('/login',async function(req,res){
    const {email,password} = req.body;
    const user = await UserModel.findOne({
        email:email,
        password:password
    })

    console.log(user);

    if(user){
    
        const token = jwt.sign({
            id: user._id
        },JWT_SECRET);
        res.json({
            token:token
        }) 
    }
    else{
        res.status(403).json({
            message:"incorrect credentials"
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