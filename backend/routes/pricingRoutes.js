const express = require('express');
const router = express.Router();
const {getPrincing} = require('../controllers/pricingController')
router.get('/test',(req,res)=>{
    res.status(200).send('alive')
})


router.get('/',getPrincing)

module.exports = router;
