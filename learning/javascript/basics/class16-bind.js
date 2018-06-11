class Toggable {
	constructor (el) {
		// Inicializar el estado interno
		this.el = el
		this.el.innerHTML = 'Off'
		this.activated = false
		this.onClick = this.onClick.bind(this)
		this.el.addEventListener('click', this.onClick) //Callback, una función que se ejecutará al momento de llamar a ese evento
	}

	onClick(ev) {
		// Cambiar estado interno de On a Off y viceversa
		this.activated = !this.activated
		this.toggleText()
	}

	toggleText() {
		// Cambiar el texto
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getElementById('boton')
const myButton = new Toggable(button)

/* 
	La función bind
	El método bind devuelve otra función que asigna el this a lo que nosotros le pasamos como parametro
	Bind sirve para settear valores, por ejemplo si queremos que tenga un valor por default una función podemos hacerlo de la siguiente manera: 
*/
function greeting (name, lastName) {
	console.log(`Hello ${name} ${lastName}`)
}

greeting("Ohm", "Sainz")
const greetingOhm = greeting.bind(null, "Ohm")
greeting("Sainz")