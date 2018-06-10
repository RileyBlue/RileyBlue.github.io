const p1 = {
	x: 0,
	y: 4
}

const p2 = {
	x: 3,
	y: 0
}

function distance(p1, p2) {
	const x = p1.x - p2.x
	const y = p1.y - p2.y

	return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
}

console.log(distance(p1, p2))

/*Objetos
	Un objeto es una coleccion de propiedades con un nombre y valor, estas propiedades pueden ser tan simples como variables, o funciones. 
	Cuando un objeto tiene funciones como propiedades estas son conocidas como metodos del objeto.
	Un ejemplo de objeto que hemos visto bastante es el objeto Math y hemos visto algunos de sus metodos como round(), floor(), random() etc..
	Cuando creamos funciones o metodos dentro de nuestro objeto, y queremos alterar alguno de las propiedades del mismo usamos la palabra reservada this para acceder a él.
	Para acceder a una de los metodos de nuestro objeto basta con usar la nomenclatura del . objeto.metodo(parametro.

	Funciones usadas:
		Math.sqrt() --> Nos retorna la raiz cuadrada del numero que le pasamos como parametro
*/

// Esto es un objeto literal (literal significa que se le asigna un valor desde el principio o directamente)
/*
	EL cuerpo del objeto va entre llaves y se le asignan sus propiedades/valor, las cuales también pueden ser metodos
*/
const MiObjetoLiteral = {
	entero: 10,
	flotante: 20.5,
	cadena: "hola mundo",
	metodo: function () { // Esto es una función anónima, pero que se llamará mediante la propieda del objeto, de nombre "metodo"
		alert("usastes el metodo de tú objeto literal")
	},
	metodo2: platzi // creamos un "metodo", pero realmente esto aún no existe
}

// A las propiedades del objeto literal, se accede mediante: NombreDelObjeto.propiedad (notese el ".")
console.log(MiObjetoLiteral.entero) // 10
console.log(MiObjetoLiteral.cadena) // "hola mundo"

console.log(MiObjetoLiteral.flotante) // 20.5
MiObjetoLiteral.flotante = 15.12// se le asigna un nuevo valor a la propiedad del objeto, llamado flotante
console.log(MiObjetoLiteral.flotante) // 15.12

MiObjetoLiteral.boleano = true// se pueden crear nuevas propiedades desde afuera
console.log(MiObjetoLiteral.boleano) // imprime la nueva propiedad creada en la linea anterior (true)

MiObjetoLiteral.metodo(); // aqui llamamos el metodo del objeto e imprime su alert.
MiObjetoLiteral.metodo(); // aqui llamamos el metodo del objeto e imprime su alert.

// creamos nuestra función "platzi", que estaba siendo utilizada por nuestro objeto, pero que hasta ahora no habia sido creada
functionplatzi() {
	console.log("This works")
}

MiObjetoLiteral.metodo2() // se puede acceder a la función de esta manera....
platzi() // ... o de esta manera ```