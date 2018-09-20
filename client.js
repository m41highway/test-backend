// var express = require('express'); 
// var app = express();  

// var server = require('http').createServer(app);  
// var io = require('socket.io')(server);

// var socket = io.connect('http://localhost:5000');
// socket.on('connect', function(data) {
//    console.log("connecting...");
//    socket.emit('join', 'Hello World from client');
// });

// server.listen(6000); 

// const io = require('socket.io-client');
// const socket = io('http://localhost:5000');

// socket.on('connection', function(data) {
//    console.log("connecting...");
//    socket.emit('join', 'Hello World from client');
// });

var socket = require('socket.io-client')('http://localhost:5000');
socket.on('connect', function(){
 console.log(' i am connecting....')
 socket.emit('price-queue', {
  price: Math.random() * 10,
  timestamp: new Date()
 });
});
socket.on('event', function(data){
 console.log(' i am receiving....')
});
socket.on('disconnect', function(){
 console.log(' i am disconnecting....')

});