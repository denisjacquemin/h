/*global require */
/*jslint node: true */

'use strict';


var express = require('express'),
    http = require('http'),
    routes = require('./routes'),
    path = require('path');

var app = express();

app.configure(function () {
    app.set('view engine', 'html');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('views', __dirname + '/views');
    app.engine('html', require('ejs').renderFile);
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/:location/:urlid', function (req, res) {
    console.log('/:location' + req.params.locatssion);

    // resolve lng and lat
    // get properties from API with lng and lat
    // parse results with template
    // render the layout and parsed template in response

    $.getJSON( "http://localhost:5000/API/v1/properties?lon=" + lng + '&lat=' + lat);



    var addressFilter = new RegExp(req.params.city, "i");

    Property.find({ address: addressFilter },
        function (err, doc) {
            res.send(doc);
        });
});

app.get('/:location', function (req, res) {
    console.log('/:location' + req.params.locatssion);

    // resolve lng and lat
    // get properties from API with lng and lat
    // parse results with template
    // render the layout and parsed template in response

    $.getJSON( "http://localhost:5000/API/v1/properties?lon=" + lng + '&lat=' + lat);

    var addressFilter = new RegExp(req.params.city, "i");

    Property.find({ address: addressFilter },
        function (err, doc) {
            res.send(doc);
        });
});

app.get('/*', routes.index);


var port = Number(process.env.PORT || 5000);
http.createServer(app).listen(port, function () {
    console.log("Express server listening on port " + port + __dirname);
});