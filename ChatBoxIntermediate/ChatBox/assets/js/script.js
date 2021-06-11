/* make connection */
const socket = io.connect("http://localhost:4000");

/* Query Dom */
let output = document.getElementById('output');
let handle = document.getElementById('handle');
let message = document.getElementById('message');
let btn = document.getElementById('send');

/* emit event */
btn.addEventListener('click',() => {
    /** emit message from websSocket to server */
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });

});

/* listen for event(emit message to other clients) */
socket.on('chat',(data) => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});