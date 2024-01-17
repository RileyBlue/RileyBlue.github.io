const Point = {
  init: function (x, y) {
    this.x = x
    this.y = y 
  },
  moveX: function moveX(x) {
    this.x += x
  },
  moveY: function moveY(y) {
    this.y += y
  },
  distance: function distance(p) {
    const x = this.x - p.x 
    const y = this.y - p.y 

    return Math.sqrt(x * x + y * y)
  }
}

const p1 = Object.create(Point)
const p2 = Object.create(Point)

p1.init(0,4)
p2.init(3,0)

console.log(p1.distance(p2))
p1.moveX(10)
console.log(p1.distance(p2))
p2.moveY(-4)
console.log(p1.distance(p2))
/*
  Definiendo la clase Punto - Object.create en JavaScript
  En JavaScript tenemos varias formas para crear objetos, ahora vamos a crear un nuevo constructor del objeto punto
*/

const Punto = {
  init: function init(x,y) {
    this.x = x
    this.y = y    
  },
  moverEnX: function moverEnX(x) {
    this.x += x
  },
  moverEnY: function moverEnY(y) {
    this.y += y
  }
}

const p1 = Object.create(Punto)
p1.init(0,4)

/*
  Otra forma de crear objetos con Object.create(): En la clase anterior usábamos una función para crear objetos. 
  Hay otra forma diferente que usa un objeto literal para la creación de otros objetos que heredan su características:
*/ 
const objetoPadre = {
  init: functioninit (x,y) { // Método para asignación de atributos
    this.name = x;
    this.age  = y;
  },
  metodoA: functionmetodoA(newX) { // Método declarado dentro del objeto padre
    this.name = x
  }
}

let objetoHijo = Object.create(objetoPadre) // Creación del objeto
objetoHijo.init("David", 17)  // Asignación de los atributos del objeto hijo

/* 
  Es importante darnos cuenta de dos cosas:
    Métodos: Los métodos, a diferencia de la forma anterior, si pueden ser declarados dentro del objeto padre
    Init: Luego de crear el objeto Hijo es necesario “inicializarlo” haciendo uso del método init para asignar correctamente el valor de los atributos al nuevo objeto. 
    El método init resulta ser el constructor de nuesto objeto.