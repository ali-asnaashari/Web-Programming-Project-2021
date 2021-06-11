const express = require('express');

/** App setup */
const app = express();

/** Server setup */
const server = require('http').createServer(app);

server.listen(4000,() => {
   console.log("server running...");
});

/** Static File */
app.use(express.static('assets'));

/** Socket setup */
const io = require("socket.io")(server);

/** Wait(Listen) For Connection */
io.on('connection',(socket) => {
   console.log("User Connection: " + socket.id);

   /** wait(Listen) that message being sent from client */
   socket.on('chat',(data) => {
      /** send data out to all different clients connected to server on webSocket */

      /** refer to all sockets that are connected to the server */
      io.sockets.emit('chat',data);
   });

   socket.on('typing',(data) => {
      /** broadcast message
       * emit to every other single client but not transmitter
       */
      socket.broadcast.emit('typing',data);
   });

});











