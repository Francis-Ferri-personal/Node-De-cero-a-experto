const { Socket } = require("socket.io");
const { comprobarJWT } = require("../helpers");
const { ChatMensajes } = require("../models");

const chatMensajes = new ChatMensajes();

const socketController = async (socket = new Socket(), io) => {
	const token = socket.handshake.headers["x-token"];

	const usuario = await comprobarJWT(token);
	if (!usuario) {
		return socket.disconnect();
	}

	// Agregar el nuevo usuario conectado
	chatMensajes.conectarUsuario(usuario);
	// io emite para todo el mundo, por lo cual usar broadcast es innecesario
	io.emit("usuarios-activos", chatMensajes.usuariosArr);
	socket.emit("recibir-mensajes", chatMensajes.ultimos10);

	// Conectarlo a una sala especial
	// Esta en tres salas: Global, socket.id, usuario.id
	socket.join(usuario.id);

	// Limpiar cuando alguiien se desconecta
	socket.on("disconnect", () => {
		chatMensajes.desconectarUsuario(usuario.id);
		io.emit("usuarios-activos", chatMensajes.usuariosArr);
	});

	socket.on("enviar-mensaje", ({ uid, mensaje }) => {
		if (uid) {
			// Mensaje privado
			socket.to(uid).emit("mensaje-privado", { de: usuario.nombre, mensaje });
		} else {
			// Mensaje publico
			chatMensajes.enviarMensaje(usuario.uid, usuario.nombre, mensaje);
			io.emit("recibir-mensajes", chatMensajes.ultimos10);
		}
	});
};

module.exports = {
	socketController
};
