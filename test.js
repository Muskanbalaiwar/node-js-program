

const express=require('express')
const bodyparser=require('body-parser')


const app=express();

app.use(bodyparser.urlencoded({extended:false}))
app.use((req,res,next)=>{

    console.log('Inside the Middleware');
    next();
})

app.use('/add-product',(req,res,next)=>{

    console.log('Inside the  Middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><br><input type="number" name="size"><br><br><button type="submit">Add Products</button></form>');
    //next();
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{

    console.log('Inside the another Middleware');
    res.send('<h1>hello my first Express Progm</h1>');
    //next();
})
app.listen(3001)

console.log('Muskan gupta')
