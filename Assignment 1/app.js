const express = require('express');
const fs = require('fs')
const app = express();
const port = 3000;
app.listen(port , () => console.log('example ${port}' ));
 
app.get('/',(req,res)=>{
    fs.readFile('Members.json','utf-8',(err,data)=>{
        if (err) throw err;
        res.send(JSON.parse(data));

    });

    
});

app.get('/log',(req,res)=>
res.send('hellow world'));

