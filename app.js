var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

const connectionString = "mongodb+srv://dara:wRR7amVQkGxV5hdZ@learnmongo.xtbuwaz.mongodb.net/?appName=learnMongo";
mongoose = require('mongoose');
mongoose.connect(connectionString);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tattoosRouter = require('./routes/tattoos');
var gridRouter = require('./routes/grid');
var randomitemRouter = require('./routes/pick');
var Tattoo = require('./models/tattoo');
var resourceRouter = require('./routes/resource');
const tattoo = require('./models/tattoo');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tattoos', tattoosRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', randomitemRouter);
app.use('/resource', resourceRouter);

async function recreateDB(){
 // Delete everything
  await Tattoo.deleteMany();
  let instance1 = new Tattoo({
        customer: "John", 
        duration: 1,
        cost: 80.0,  
        colored: false 
      });
  let instance2 = new Tattoo ({
        customer: "Sarah", 
        duration: 2,
        cost: 160.0,  
        colored: false 
      });
  let instance3 = new Tattoo({
        customer: "John", 
        duration: 1,
        cost: 100.0,  
        colored: true 
      });
  
  instance1.save().then(doc=>{
    console.log("First object saved")}
    ).catch(err=>{
    console.error(err)
  });
  instance2.save().then(doc=>{
    console.log("Second object saved")}
    ).catch(err=>{
    console.error(err)
  });
  instance3.save().then(doc=>{
    console.log("Third object saved")}
    ).catch(err=>{
    console.error(err)
  });
}
let reseed = true;
if (reseed) {recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
