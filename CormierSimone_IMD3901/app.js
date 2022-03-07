const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
const io        = require('socket.io')(server);

const LISTEN_PORT   = 8080;

server.listen(LISTEN_PORT);
app.use(express.static(__dirname + '/public')); //set root path of server ...

console.log("Listening on port: " + LISTEN_PORT );

//our routes
app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/index.html' );
});

app.get( '/2D', function( req, res ){ 
    res.sendFile( __dirname + '/public/2D.html' );
});

app.get( '/3D', function( req, res ){ 
    res.sendFile( __dirname + '/public/3D.html' );
});

//socket.io stuff
io.on('connection', (socket) => {

    console.log( socket.id + " connected" );

    socket.on('disconnect', () => {
        console.log( socket.id + " disconnected" );
    });

    socket.on("red1", (data) => {
        console.log( "red event received" );
        io.sockets.emit("color_change1", {r:255, g:0, b:0});
    });

    socket.on("blue1", (data) => {
        console.log( "blue event received" );
        io.sockets.emit("color_change1", {r:0, g:0, b:255});
    });

    socket.on("green1", (data) => {
        console.log( "green event received" );
        io.sockets.emit("color_change1", {r:0, g:255, b:0});
    });

    socket.on("yellow1", (data) => {
        console.log( "yellow event received" );
        io.sockets.emit("color_change1", {r:255, g:255, b:0});
    });

    socket.on("red2", (data) => {
        console.log( "red event received" );
        io.sockets.emit("color_change2", {r:255, g:0, b:0});
    });

    socket.on("blue2", (data) => {
        console.log( "blue event received" );
        io.sockets.emit("color_change2", {r:0, g:0, b:255});
    });

    socket.on("green2", (data) => {
        console.log( "green event received" );
        io.sockets.emit("color_change2", {r:0, g:255, b:0});
    });

    socket.on("yellow2", (data) => {
        console.log( "yellow event received" );
        io.sockets.emit("color_change2", {r:255, g:255, b:0});
    });

    socket.on("red3", (data) => {
        console.log( "red event received" );
        io.sockets.emit("color_change3", {r:255, g:0, b:0});
    });

    socket.on("blue3", (data) => {
        console.log( "blue event received" );
        io.sockets.emit("color_change3", {r:0, g:0, b:255});
    });

    socket.on("green3", (data) => {
        console.log( "green event received" );
        io.sockets.emit("color_change3", {r:0, g:255, b:0});
    });

    socket.on("yellow3", (data) => {
        console.log( "yellow event received" );
        io.sockets.emit("color_change3", {r:255, g:255, b:0});
    });

    socket.on("red4", (data) => {
        console.log( "red event received" );
        io.sockets.emit("color_change4", {r:255, g:0, b:0});
    });

    socket.on("blue4", (data) => {
        console.log( "blue event received" );
        io.sockets.emit("color_change4", {r:0, g:0, b:255});
    });

    socket.on("green4", (data) => {
        console.log( "green event received" );
        io.sockets.emit("color_change4", {r:0, g:255, b:0});
    });

    socket.on("yellow4", (data) => {
        console.log( "yellow event received" );
        io.sockets.emit("color_change4", {r:255, g:255, b:0});
    });

    socket.on('2DdisableOff',(data) => {
        io.sockets.emit('2D_disable_off');
    });

    socket.on('2DdisableOn',(data) => {
        io.sockets.emit('2D_disable_on');
    });

    socket.on('3DdisableOff',(data) => {
        io.sockets.emit('3D_disable_off');
    });

    socket.on('3DdisableOn',(data) => {
        io.sockets.emit('3D_disable_on');
    });

    socket.on('start', (data) => {
        io.sockets.emit('start_game');
    });

    socket.on('continue', (data) => {
        io.sockets.emit('next_round');
    });

    socket.on('bothLose',(data) => {
        io.sockets.emit('both_lose');
    });

    socket.on('3DWin',(data) => {
        io.sockets.emit('3D_Win');
    });

    socket.on('2DWin',(data) => {
        io.sockets.emit('2D_Win');
    });

    //infinite loop with a millisecond delay (but only want one loop running ...)
    //a way to update all clients simulatenously every frame i.e. updating position, rotation ...
    // if (setIntervalFunc == null) {
    //     console.log("setting interval func");
    //     setIntervalFunc = setInterval( () => {
    //         //if we want to do loops 
    //     }, 50);
    // }
});