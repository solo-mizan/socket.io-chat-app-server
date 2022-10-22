const express = require('express');
const { Server } = require('socket.io');
const app = express();
const port = process.env.PORT || 5000;
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Server is okay</h1>')
})


app.listen(port, () => {
    console.log('socket.io server is running on port', port);
})
