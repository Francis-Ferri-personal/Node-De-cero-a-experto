const fs = require("fs");

class Ticket {
	constructor(numero, escritorio) {
		this.numero = numero;
		this.escritorio = escritorio;
	}
}

class TicketControl {
	constructor() {
		this.ultimo = 0;
		this.hoy = new Date().getDate();
		this.tickets = [];
		this.ultimos4 = [];

		const data = require("../data/data.json");
		if (data.hoy === this.hoy) {
			this.ultimo = data.ultimo;
			this.tickets = data.tickets;
			this.ultimos4 = data.ultimos4;
		} else {
			this.reiniciarConteo();
		}
	}

	siguiente() {
		this.ultimo += 1;
		const ticket = new Ticket(this.ultimo, null);
		this.tickets.push(ticket);
		this.grabarArchivo();
		return `Ticket ${this.ultimo}`;
	}

	getUltimoTicket() {
		return `Ticket ${this.ultimo}`;
	}

	getUltimos4() {
		return this.ultimos4;
	}

	atenderTicket(escritorio) {
		if (this.tickets.length === 0) {
			return "No hay tickets";
		}

		// Asi se evitan problemas con la referencia
		const numeroTicket = this.tickets[0].numero;
		// Eliminar el primer elemento de un arreglo
		this.tickets.shift();
		const atenderTicket = new Ticket(numeroTicket, escritorio);
		// Agregar un elemento al inicio
		this.ultimos4.unshift(atenderTicket);
		if (this.ultimos4.length > 4) {
			// Borra el ultimo elemento
			this.ultimos4.splice(-1, 1);
		}

		// console.log("Ultimos 4");
		// console.log(this.ultimos4);

		this.grabarArchivo();

		return atenderTicket;
	}

	reiniciarConteo() {
		this.ultimo = 0;
		this.tickets = [];
		this.ultimos4 = [];
		this.grabarArchivo();
		console.log("Se ha inicializado el sistema");
	}

	grabarArchivo() {
		const jsonData = {
			ultimo: this.ultimo,
			hoy: this.hoy,
			tickets: this.tickets,
			ultimos4: this.ultimos4
		};

		const jsonDataString = JSON.stringify(jsonData);
		fs.writeFileSync("./server/data/data.json", jsonDataString);
	}
}

module.exports = {
	TicketControl
};
