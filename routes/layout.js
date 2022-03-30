const express=require('express');
const router=express.Router();

const layoutController=require('../controllers/layout_controller');


router.get('/layout', layoutController.layout);


module.exports=router;