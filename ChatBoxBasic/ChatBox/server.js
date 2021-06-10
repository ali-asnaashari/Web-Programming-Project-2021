const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server,{cores:{origin:"*"}});

/** Register view engine */
app.set('view engine','ejs');

app.get("/home",(req, res) => {
    res.render("home");
});

server.listen(3000,() => {
   console.log("server running...");
});

io.on('connection',(socket) => {
    console.log("User Connected: " + socket.id);

    socket.on("message",(data) => {
        socket.broadcast.emit('message',data);
    });
})