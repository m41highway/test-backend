const express = require('express')
const app = express()
const server = require('http').createServer(app)  
const io = require('socket.io')(server)
const store = require('./store')

app.use(express.static(__dirname + '/node_modules'))

app.get('/latestAveragePrice', function(req, res,next) {  
  res.status(200).json({
    message: store.getAveragePrice()
  })
});

io.on('connect', function(client) {  
 console.log('========= Welcome to Anthony\' price broker =========');

 client.on('price-queue', (data) => {
     console.log('received ', data);
     store.storeData(data)
 });
});

server.listen(5000); 
