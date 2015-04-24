var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();
var methodOverride = require('method-override');
var expressSession = require('express-session');

//require('./routes/loglist')(app);
// view engine setup
app.set('port', process.env.PORT || 3000);

// normal middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

//requiring the stuff we need
require('./app_server/routes/main.js')(app);

app.use(function(req, res) { 
    res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

//config passport last

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('*flips table*');
    err.status = 404;
    next(err);
});



// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
    });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;