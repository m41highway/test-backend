var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

var persist = require('./persist')

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    res.status(200).json({
    message: persist.getAverage(timeSeriesData)
    })
});

io.on('connect', function(client) {  
 console.log('A new client has come!');

 client.on('price-queue', function(data) {
     console.log('receive = ', data);
     persist.storeData(data)
 });
});

server.listen(5000); 
