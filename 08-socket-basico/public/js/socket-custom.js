// Usuario conectandose al servidor
const socket = io();
// Escuchar eventos (on) escuchar
socket.on("connect", () => {
	console.log("Conectado al servidor");
});

socket.on("disconnect", () => {
	console.log("Perdimos conexion con el servidor");
});

// Enviar informacion (emmit) enviar
// Emite apenas tenga la conexion
socket.emit(
	"enviarMensaje",
	{
		usuario: "Francis",
		meensaje: "Hola Mundo"
	},
	(resp) => {
		// Sirve para confirmar la recepcion del envio y hacer alguna  aacicion despues
		console.log("Respuesta server: ", resp);
	}
);

// Escuchar informacion
socket.on("enviarMensaje", (mensaje) => {
	console.log(mensaje);
});
