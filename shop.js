const express=require('express');

const router=express.Router();
router.get('/',(req,res,next)=>{

    console.log('Inside the another Middleware');
    res.send('<h1>hello my first Express Progm</h1>');
    //next();
})

module.exports=router;