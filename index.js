const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

users = [];
connections = [];

io.sockets.on('connection', socket => {
    connections.push(socket);
    console.log("Connected ...");

    socket.on('disconnect', data => {
        connections.slice(connections.indexOf(socket), 1);
        console.log("Disconnect ...")
    })
});