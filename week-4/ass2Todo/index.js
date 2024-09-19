const express = require('express');
const fs = require('fs');
const { title } = require('process');

const app = express();
const port = 3000;
app.use(express.json());

//function to read data



app.get('/todo', (req, res) => {
    fs.readFile('todo.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return res.json({message:"there is an error"});
        }
         data =  JSON.parse(data);
        return res.json({
            data
        })
    });
    
});




app.post('/todo-add', (req, res) => {
    res.send('Hello World!');
});

app.put('/todo-update', (req, res) => {
    res.send('Hello World!');
});

app.delete('/todo-delete', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});