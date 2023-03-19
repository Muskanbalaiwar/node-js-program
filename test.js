

const express=require('express')

const app=express();

const adminRouter=require('./route/admin');

const shopRouter=require('./route/shop');

const bodyparser=require('body-parser')




app.use(bodyparser.urlencoded({extended:false}))

app.use('/admin',adminRouter);
app.use('/shop',shopRouter)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3001)

console.log('Muskan gupta')
