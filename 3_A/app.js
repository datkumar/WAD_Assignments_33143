const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  
app.get('/', function(req, res){
    res.render('Demo')
})
  
app.listen(8080, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})