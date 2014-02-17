var express = require('express');

var app = express();

//Environment Variables
//var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;


var viewsPath1 = 'C:/Users/alex/WebstormProjects/Company/server/views';
var viewsPath2 = __dirname + '/server/views';
console.log('current directory: ' + __dirname);

console.log('Server starting...');

app.configure(function() {
    app.set('views', viewsPath2);
    app.use(express.logger('dev'));
    app.engine('html', require('ejs').renderFile);
    console.log('server started the view (v8) engine, vroom vroom!');
    //app.use(express.static('C:users/ahester/WebstormProjects/Company/public/views'));
});

app.get('*', function (req, res) {
    res.render('index.html');
    console.log('server pooped out an index view from /server/views directory');
});

var port = process.env.PORT || 3030;
var ip = "";
app.listen(port, ipaddr);

console.log('server listening on ' + ipaddr + port + '...');
