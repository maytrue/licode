var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.send('hello world')
})

io.on('connection', function (socket) {
    console.log("user connected")
    socket.emit('welcome', 'hello world')

    socket.on('message', function (data) {
        console.log("Recevied Message: " + data)
    })

    socket.on('token', function (data) {
        console.log("Recevied token: " + data)
    })
})


http.listen(12000, function () {
    console.log('listening on port 12000')
})

