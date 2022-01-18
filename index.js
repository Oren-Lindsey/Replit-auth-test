const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const bodyParser = require("body-parser");
const ejs = require('ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
  var userData = []
  userData.user_id = req.headers['x-replit-user-id']
  userData.user_name = req.headers['x-replit-user-name']
  userData.user_roles = req.headers['x-replit-user-roles']
  console.log(userData)
  //res.sendFile(__dirname + '/public/pages/index.html');
  ejs.renderFile(__dirname + '/public/pages/index.html', userData, function(err, str){
    res.send(str);
  });
})

app.listen(port, () => {
  console.log(`Example app listening at https://express-example-app.s40.repl.co`)
})