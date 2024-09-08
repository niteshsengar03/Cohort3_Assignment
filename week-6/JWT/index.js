const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Nik";
const app = express();
const port = 3000;

app.use(express.json());

const users =[{username:"nitesh",password:123},{username:"neharika",password:1234}];

function Authentication(req,res,next){
    const token = req.headers.token;
    try{
        decoded = jwt.verify(token,JWT_SECRET)
        console.log(decoded);
        //  res.json({
        //     message:"You can enter the router" 
        // })
        req.user = decoded;
        next();
    } catch(err){
     return res.json({
        message:"You can't enter the router"
     })
     }
}

app.post('/signup', (req, res) => {
    res.send('Hello World!');
});

app.post('/signin',(req,res)=>{
    const{username,password} = req.body;
    // console.log("hi there");
    for(let i=0;i<users.length;i++){
        console.log(users[i].username);
        
        if(users[i].username === username && users[i].password === password){
            const token = jwt.sign(username,JWT_SECRET);
            console.log(token);
            return res.status(200).json({
                token:token,
                message:"You are logged in"
            })
        }
    }
    return res.status(400).json({
        message:"User does not exist"
    })
})

app.post('/sum',Authentication,(req,res)=>{
    const {a,b} = req.body;
    const sum = a+b;
    const username = req.user;
    return res.status(200).json({
        message: `Hello ${username} this is your sum ${sum} of ${a} and ${b}`
    })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});