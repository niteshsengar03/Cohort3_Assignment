const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "iloveyou";

const app = express();
const port = 3000;
app.use(express.json());

const users = [
    {
        username:"nitesh",
        password:123
    }
];

function Auth(req,res,next){
    const token = req.headers.token;
    try{
        const decodeData = jwt.verify(token,JWT_SECRET);
        req.user = decodeData.username;
        next();
        }
        catch(e){
            console.log(e);
            return res.json({
                message: "Not allwoed to enter the route"
            })
        }

}

app.post('/signup', (req, res) => {
    const {username,password} = req.body;
    users.push({
        username,
        password
    })

    return res.json({
        message:"You are signed in"
    })
});

app.post('/signin',(req,res) =>{
    const {username,password} = req.body;
    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }
    if(!foundUser){
        return res.json({
            message:"Credential incorrect"
        })
    }
    else{
        const token = jwt.sign({username:foundUser.username},JWT_SECRET);
        return res.json({
            token:token
        })
    }
})

app.get('/me',Auth,(req,res)=>{
    res.json({
        person:req.user
    })
    
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});