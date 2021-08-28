const express = require('express')
const app = express()
const port = 3000;



app.set('view engine', 'pug')
app.get('/',(req,res)=>{
    console.log(users)
})
app.get('/user', (req, res) => {

    console.log(users)
})

app.listen(port, () => console.log(`Server conecting to ${port}`))