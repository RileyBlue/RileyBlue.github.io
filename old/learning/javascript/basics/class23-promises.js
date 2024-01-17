functionget(URL){
	//New Promise recibe una funcion
	returnnewPromise((resolve, reject)=>{
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			const DONE = 4
			const OK = 200
			if (this.readyState === DONE) {
				if(this.status === OK){
					//Todo OK
					resolve(JSON.parse(this.responseText))
				}else {
					//Hubo un error
					reject(newError(`Se produjo un error al realizar el request ${this.status}`))
				}
			} 
		}

		xhr.open('GET', URL);
		xhr.send(null);
	})
}

/* Funcion para tratar el error */
functionhandleError(err){
	console.log(`Request failed: ${err}`) 
}

let luke

/*llamada al metodo */
get('http://www.swapi.co/api/people/1/')
	//lamada a funcion normal
	.then(function(response){
		luke = response
		//promesa
		return get(luke.homeworld)
	})
	//llamada a funcion con arrow functions
	.then((homeworld)=>{
		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	})
	.catch((err)=> handleError(err))
// Soportadas por EcmaScript 2015. Son objetos. 
// Una promesa está asociada a una tarea asincrónica. 
// A una promesa le pasamos una función con dos parámetros. Uno es resolve y otro reject. 
// Dentro se ejecuta una tarea asíncrona como un setTimeOut()
// Así se crea una promesa. 
const promise = new Promise(function(resolve, reject) {
	setTimeOut(function() {
		reject(new Err('Se produjo un error'))
	}, 1000)
})

promise
  .then(function() { //Se realizó

  })
  .catch(function(err) { // Hubo error

  })

// Tenemos que llamar tanto a resolve como a reject. 

/* Una promesa internamente tiene 3 estados:
  Pending: Pendiente. 
  Fullfilled: Se completó.
  Rejected: Se rechazó, no se pudo completar.

function get(URL, callback) {

}

/* Promesas
Las Promesas son objetos y están asociadas con alguna tarea asincrónica.

Existen tres estados internos de las Promesas:

Pending
Fullfiled
Rejected
El constructor Promise tiene dos parámetros:
*/ 

const promise = new Promise (function (resolve, reject) { 

)}

//Promise es un constructor que recibe una función con dos argumentos.