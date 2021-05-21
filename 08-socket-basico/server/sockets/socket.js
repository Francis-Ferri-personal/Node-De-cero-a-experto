const { io } = require("../server");

// servidor conectado al usuario
io.on("connection", (client) => {
	console.log("Usuario conectado");

	client.emit("enviarMensaje", {
		usuario: "Admin",
		mensaje: "Bienvenido a esta aplicacion"
	});

	client.on("disconnect", () => {
		console.log("Usuario desconectado");
	});

	// Escuchar el cliente
	client.on("enviarMensaje", (data, callback) => {
		console.log(data);

		client.broadcast.emit("enviarMensaje", data);

		/* if (messaje.usuario) {
			callback({
				resp: "TODO SALIO BIEN!!!"
			});
		} else {
			callback({
				resp: "TODO SALIO MAL!!!"
			});
		} */
	});
});
