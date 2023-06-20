const socket = io("http://192.168.42.126:3000");
socket.on('weather', (data) => {console.log(data)})

function sendMessage(username,text) {
    socket.emit('message', {
        username:username.value,
        text:text.value,
        
    })
    text.value = "";
}
