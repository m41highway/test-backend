var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

var persist = require('./persist')

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    console.log(persist)

    let timeSeriesData = [
     { price: 1.23 },
     { price: 2.74 },
     { price: 3.11 }
    ]
    res.status(200).json({
    message: persist.getAverage(timeSeriesData)
    })
});

server.listen(5000);  