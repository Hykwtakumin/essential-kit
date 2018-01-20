//require dotenv
require('dotenv').config()

var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var { check, validationResult } = require('express-validator/check')
var { matchedData, sanitize } = require('express-validator/filter')

//Initiate Express
var app = express()

//Define Desired Port Here
const PORT = process.env.PORT

//View Engine
app.set('view engine', 'pug')

//set public static path
app.use(express.static(path.join(__dirname, 'public')))

//set favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//Define Routes Here
var index = require('./routes/index')
var form = require('./routes/form')

//Add Routes Middlewares Here
app.use('/', index)
app.use('/form', form)

//Serve Application
app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})
