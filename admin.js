const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{

    console.log('Inside the  Middleware');
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><br><br><input type="number" name="size"><br><br><button type="submit">Add Products</button></form>');
    //next();
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop')
})

module.exports=router;