function greetingFamily (lastName) { // Función externa
	return function greetingMember(name) { // Función Interna
		console.log(`Hi ${name} ${lastName} `)
	}
}

const greetingFamily = (lastName) => (name => console.log(`Hi ${name} ${lastName} `))

const greetingGomez = greetingFamily("Gomez")
const greetingPerez = greetingFamily("Perez")

greetingGomez('Pedro')
greetingGomez('Juan')
greetingGomez('Laura')
greetingGomez('Mónica')

/*
	Entiende los closures de JavaScript
	Los closure son funciones que recuerdan el entorno en el cual fuerón creadas.
	Esto quiere decir que al llamar la función van a recordar las variables que tenian en ese momento. Por ejemplo.
	Si queremos hacer una función para saludar determinada familia
*/

function saludarFamilia(apellido) {
  return function(nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

let saludarPerez = saludarFamilia('perez'); 

// De esta forma podemos crear nuevas funciones partiendo de funciones que recuerdan variables internas

// Una función que me permita crear prefijos para las palabras
function makePrefixer(prefixer) {
	return function addPrefixer(word) {
		console.log(`${prefixer}${word} `)
	}
}

const makePrefixer = (prefixer) => (word => console.log(`El prefijo "${prefixer}" ha sido agregado: ${prefixer}${word}`))

const rePrefix = makePrefixer("re")
const inPrefix = makePrefixer("in")

rePrefix("bueno")
inPrefix("creíble")