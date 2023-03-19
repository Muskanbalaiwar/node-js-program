

const express=require('express')
const app=express();
app.use((req,res,next)=>{

    console.log('Inside the Middleware');
    next();
})

app.use((req,res,next)=>{

    console.log('Inside the another Middleware');
    res.send('<h1>hello my first Express Progm</h1>');
    //next();
})
app.listen(3001)

console.log('Muskan gupta')
