class Point {
	constructor(x, y) {
		this.x = x
		this.y = y 
	}

	moveX(x) {
		this.x += x
	}

	moveY(y) {
		this.y += y
	}

	distance (p) {
		const x = this.x - p.x
		const y = this.y - p.y 

		return Math.sqrt(x * x + y * y)
	}
}

const p1 = new Point(0,4)
const p2 = new Point(3,0)

console.log(p1.distance(p2))
p1.moveX(10)
console.log(p1.distance(p2))
p2.moveY(-4)
console.log(p1.distance(p2))

/*
	Definiendo la clase Punto - Class en JavaScript
	Una funcionalidad agregada en EcmaScript 2015, es poder escribir el constructor de los objetos con el keyword class.
	Podemos definir nuestro constructor Punto como:
*/

class Punto {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  moverEnX(x) {
    this.x += x
  }
  moverEnY(y) {
    this.y += y
}

const p1 = new Punto(0,4)
const p2 = new Punto(3,0)

/* 
	“Hay 3 formas de crear objetos”:
		Creando una funcion y usando prototipos
		Creando un objeto y usando Createobject()
		Creando una clase y creando una instancia de la misma
*/ 

/* 
	Tercera y mejor forma de crear objetos usando clases: La nueva versión, ES6 de JS 
	Introduce una forma más sencilla de crear objetos a partir de clases usando el keyword “class”. 
	Funciona muuy similar a la forma de prototipos, con la diferencia que no es una función y que incluye un constructor.
	La manera de crear métodos en la clases es mucho más sencilla que como habíamos visto antes y para crear los objetos 
	Se hace similar a como lo hacíamos con los prototipos:
*/

class myClass {         // Creación de la clase
	constructor(a, b) {   // Asignación de atributos por medio del constructor
	    this.name = a,
	    this.age  = b
	}
	metodoA(newA) {      // Creación de métodos. No es necesario el keyword "function"
	    this.name = newA
	}
}

const firstObject = new myClass(a, b) // Creación del objeto a partir de la clase