const p1 = {
  x: 0,
  y: 4,
  moveX: function(x) {
    this.x += x
  },
  moveY: function(y) {
    this.y += y
  }
}

const p2 = {
  x: 3,
  y: 0,
   moveX(x) {
    this.x += x
  },
  moveY(y) {
    this.y += y
  }
}

function distance(p1, p2) {
  const x = p1.x - p2.x
  const y = p1.y - p2.y

  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
}

console.log(distance(p1, p2))
//Los objetos en JavaScript se componen de la siguiente forma: 
//{ } => Los objetos se identifican por ser encapsulados entre dos llaves, ¡OJO! no se deben confundir con el bloque de una función.
//Ejemplo: 

{
	// Contenido del objeto
}

//Los objetos pueden ser almacenados en variables que pasa a ser el nombre del objeto. Ejemplo:
let miObjeto = {
    // Contenido del objeto
}

// Los objetos se conforman de una estructura propiedad/valor, donde la clave puede ser un string o un numero
// Y los valores pueden ser: Un string, un entero, un flotante, una función, un arreglo, una variable.
// la forma en que se declara un objeto es la siguiente: { propiedad : "valor" }.
// El signo ":" asigna el valor a la propiedad definida en el objeto
// Cada propiedad es separada por un signo de ",".
// EJemplo:

let profesores =  {
    nombre: "Freddy Vega",
    clase: "Fundamentos de Ingenieria de Software",
    duración: 12,
    estado: true,

}

/*
Para acceder a la propiedad de un objeto se siguen los siguientes pasos:
    - Escribir el nombre del objeto
    - enseguida se coloca un "." que es la forma para acceder a las propiedades
    - por último se coloca el nombre de la propiedad
    Quedando de la siguiente forma : "objeto.propiedad"

    Ejemplo:
*/
profesores.nombre;

/*
Se puede reasignar el valor de la propiedad de un objeto de la siguiente forma:
*/
profesores.nombre = "Leonidas Esteban"
// Note que se llama al objeto y a la propiedad correspondiente seguido de un signo igual y en seguida el nuevo valor para la propiedad
