var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');
const upload = multer();
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);



// routes path
const indexRoute = require('./routes/index')
app.use('/',indexRoute)
// about page path
const aboutRoute = require('./routes/about')
app.use('/about',aboutRoute)
// curriculum route path
const curriculumRoute = require('./routes/curriculum')
app.use('/curriculum',curriculumRoute)
// international route path
const internationalRoute = require('./routes/international')
app.use('/international',internationalRoute)
// online route path
const onlineRoute = require('./routes/online')
app.use('/online',onlineRoute)
// programs route path
const programsRoute = require('./routes/programs')
app.use('/programs',programsRoute)

// programs route path
const formRoute = require('./routes/form')
app.use('/form',formRoute)


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
