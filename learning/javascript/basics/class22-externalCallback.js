//Conecta a una API REST para saber el planeta de algún personaje
function get(URL, callback){ //este método get recibe una URL y un método Callbac
    const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		const DONE = 4
		const OK = 200//Es un estado de la petición, el código 200 indica que fue aceptada
        //los "this" hacen referencia al objeto xhr es igual a xhr.readyState
		if (this.readyState === DONE) { 
			if(this.status === OK){
				//Todo OK
				callback(null, JSON.parse(this.responseText)) //manda a la funciòn callback un error=null y una respuesta en formato JSON
			}else {
				//hubo un error
				callback(newError(`Se produjo un error al realizar el request ${this.status}`))//Sólo manda a callback un error, sin respuesta
			}
		}
	}

	xhr.open('GET', URL); //abre la petición (request), este GET es un "read"
	xhr.send(null);
}

/* Funcion para tratar el error */
function _handleError(err){
	console.log(`Request failed: ${err}`)
}

/*llamada al metodo get */
get('https://www.swapi.co/api/people/1/', function onResponse(err, luke){ //llama al método get y le manda la URL y el mètodo callback, err va a ser el error que le responda el método get, y luke es el JSON en caso de no haber error
	if(err) return _handleError(err) //pregunta si hay un error
	/* Para traer el mundo */
	get(luke.homeworld, function onHomeworldResponse(err, homeworld){ //hace otra llamada a get, le manda la URL donde estan los mundos (luke.homeworld) y la funcion callback
		if(err) return _handleError(err)

		luke.homeworld = homeworld //"homeworld" es la respuesta en JSON
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	})
	console.log(`Request succeded`)
	console.log('luke', luke)
})