const express = require('express')
const app = express()
const port = 3000;
const userRouter = require('./routes/user.route')
app.set('view engine', 'pug')


app.use(express.static('public'))
app.use('/users',userRouter)

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(port, () => console.log(`Server conecting to ${port}`))