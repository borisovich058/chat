//Подключаем экспресс.
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });


const rooms = new Map(); //Что-то вроде БД

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

//Подключение сокетов
io.on('connection', (socket) => {
    console.log('user connected', socket.id);
});


server.listen(7777, (err) => {
    if(err) {
        throw Error(err);
    }
    console.log('Сервер старт');
});