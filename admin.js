const express=require('express');
const router=express.Router();


router.get('/addproduct',(req,res,next)=>{
    res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"><button type="submit">add</button></form>');

});
router.post('/addproduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;