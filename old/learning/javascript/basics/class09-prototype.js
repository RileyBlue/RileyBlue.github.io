function Point(x, y) {
	this.x = x
	this.y = y
}

Point.prototype.moveX = function moveX(x) {
	this.x += x
}

Point.prototype.moveY = function moveX(y) {
	this.y += y
}

const p1 = new Point(0, 4)
const p2 = new Point(3, 0)

Point.prototype.distance = function distance(p) {
	const x = this.x - p.x 
	const y = this.y - p.y 
	return Math.sqrt(x*x + y*y)
}

console.log(p1.distance(p2))
p1.moveX(10)
console.log(p1.distance(p2))
p2.moveY(-4)
console.log(p1.distance(p2))

/* 
	Definiendo la clase Punto - Prototipos en JavaScript
	Cuando tenemos varios objetos que compartan la misma estructura podemos crear un prototipo del cual podemos crear los objetos que queramos.
	Para nuestro ejercicio de los puntos podemos crear esta estructura como: 
*/ 

function Punto(x,y) {
  this.x = x
  this.y = y
}

const p1 = new Punto(0,4)

/*
	Con el keyword new creamos un nuevo objeto
	Los objetos se vinculan con otros objetos a través de prototype, en el navegador lo puedes ver como proto y mostrara el prototipo con el que fue creado
*/

/* 
	Lo que queremos decir es que un prototipo es un objeto del que otros objetos heredan propiedades, y los objetos siempre heredan propiedades de algún objeto 
	anterior, de este modo solo el objeto original y primigenio de javascript es el único que no hereda de nadie…
	
	Un “constructor” en JavaScript es “solo” una función que pasa a ser llamada con el operador new.

*/