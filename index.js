/*
const http = require('http');


const handleServer = function (req, res){
    res.writeHead(400,{ 'content-type': 'text/html'});
    res.write('<h1>simple text</h1>');
    res.end();
}
const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log("server on port 3000".green);
});
*/
const colors = require('colors');
const express = require("express");

const server = express();
server.get("/", (req, res)=>{
    res.send("<h1>Hola Mil</h1>");
    res.end(); 
});

server.listen(3000, ()=>{
    console.log("server on port 3000".red);
});