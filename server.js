//Подключаем экспресс.
const express = require('express');
const useSocket = require('socket.io');


const app = express();
const server = require('http').Server(app);
const io = useSocket(server);



const rooms = new Map(); //Что-то вроде БД

app.get('/rooms', (res, req) => {
    res.json(rooms);
});

//Подключение сокетов
io.on('connection', (socket) => {
    console.log('user connected', socket);
});


server.listen(7777, (err) => {
    if(err) {
        throw Error(err);
    }
    console.log('Сервер старт');
});