const express = require("express");
const socketIO = require("socket.io");
// http es requerido por socket.io este no trabaja directamente con express
const http = require("http");

const path = require("path");

// Express usa http por debajo, por lo que se puede hacer esto aunque parezca extraño
const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require("./sockets/socket");

server.listen(port, (err) => {
	if (err) throw new Error(err);

	console.log(`Servidor corriendo en puerto ${port}`);
});
