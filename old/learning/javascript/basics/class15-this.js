class Person {
	constructor(name, friends = []) {
		this.name = name
		this.friends = friends
	}

	// Forma 1
	friendList() {
		const _this = this
		this.friends.forEach(function(friend) {
			console.log(`Hola mi nombre es ${_this.name} y soy amigo de ${friend} `)
		})
	}

	// Forma 2
	friendList() {
		this.friends.forEach(function(friend) {
			console.log(`Hola mi nombre es ${this.name} y soy amigo de ${friend} `)
		}.bind(this))
	}

	// Form 3 en la Arrow Function hace el bind de manera interna.
	friendList() {
		this.friends.forEach((friend) => {
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${friend}`)
		})
	}
}

const ohm = new Person("Ohm", ["Franz", "César"])
ohm.friendList()
/* 
	This, _this y los arrow functions
	This hace referencia a un objeto y su valor depende de donde lo usemos, por ejemplo
*/
class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }
}

const sacha = new Persona("Sacha", ["pedro", "juan", "pepe"])