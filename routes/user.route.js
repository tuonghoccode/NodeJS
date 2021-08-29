const express = require('express')
const router = express.Router()


router.get('/create', (req,res)=>{
    res.render('users/create')
})
router.get('/signin', (req,res)=>{
    res.render('users/signin')
})





module.exports = router;