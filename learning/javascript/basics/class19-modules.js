/* 
	¿Para qué escribir módulos?

	->escribimos modulos para tener nuestro codigo encapsulado y de esta forma tener 
	un codigo mas limpio, que no se esta duplicando en otros lugares

	->cada modulo deve ser pequeño y tener una responsabilidad clara

	->escribimos modulos por las dependencias, de esta forma podemos usar modulos ya
	creados para solucionar un problema, sin tener que escribirlo desde cero
	-> un modulo es un pedaso de codigo que se encarga de resolve algo

*/

//====================FUNCTION SCOPE====================
/*Una forma de hacerlo es encapsular el codigo en una funcion
*/
 var myModule = (function myModule(){
   var name ="Alexis"

   function setNombre(anotherName) {
     name = anotherName
   }

   function getName(){
     return name
   }

   return {
     setName,
     getName
   }
 })()

 myModule.setName("Eric")
 console.log(myModule.getName())

/* 
	El problema es que esto fue muy usado hace un tiempo pero no funciona bien
	para manejar las dependencias

*/

//====================CommonJS====================
/*Otra forma de hacerlo es unsando commonjs lo que nos permite exportar una funcion */

//esta funcion estaria en un archivo llamado triangle.js
module.exports = functionarea( base = 0, height = 0){
  return base = height / 2
}
const triangle = required('./triangle.js')

const base = 5
const height = 7

console.log(`el area de un triangulo de base ${base} y altura ${height} es ${triabngle(base, height)}`)
/*si queremos exportar mas de una cosa desde nuestro archivo triangle.js basta con cambiar module.export por
export.function() y pasarle las funcionex que deseamos importar*/

/*Si bien esto tiene un mejor manejo de dependencias, ya que dentro de un modulo podemos
espesificar que dependencias necesita este para funcionar

el problemacon esta metodo es que es sincrono, y necesitariamso una libreria encargada de ensamblar todos
los required en el banding
 */


 //====================AMD====================

/*AMD es una forma de escribir los modulos de forma asincrona
es un poco diferente y la sintaxis no estan limpia como la anterior
*/

//esta modulo estaria en un archivo llamado triangle.js
define('triangle', function(){
  returnfunctiontriangle(base = 0, height = 0){
    return base = height / 2
  }
})

//archivo desde el cual llamamos al modulo
require('./triangle.js', function (triangle) {
  const base = 5
  const height = 7
  console.log(`el area de un triangulo de base ${base} y altura ${height} es ${triabngle(base, height)}`)

})


//====================Modulos ES 2015====================
/*esta es la forma mas usada ya que es bastante sencillo
y consiste en importar y exportar las referencias*/
//este codigo estaria en un archivo llamado squere.js
import triangle from'triangle'

exportfunctionarea(x){
  return x * x
}

exportfunctionperimeter(x){
  return4 * x
}

exportfunctiondiagona(x){
  return triangle.hypotenuse(x,x)
}

//desde este archivo llamaremos al modulos
import squere from'square'

const slide = 7

console.log(`la diagonal de un cuadrado de ${slide}x${slide} mide ${square.diagonal(slide)}`)

//Adicionalmente nos permite importar modulos de forma asincrona

system
  .import('triangle')
  .then(triangle =>{
    //code here..
  })
  .catch(error =>{
    //error here ...
  })



  //====================SystemJS====================
 /*SystemJS nos permite requerir modulos tanto de CommonJS como de AMD o de ES 2015*/

<script type="text/javascript" src="system.config.js"></script>

System.config({
  paths: paths,
  map:map,
  packages:packages,
  transpiler:'ts',
  typescriptOptions:{
    tsconfig:true
  },
  meta:{
    typescript:{
      exports:'ts'
    }
  }
})

System
  .import('map')
  .then(() => {/*...*/})
  .catch((err) => {/*...*/})

  /*El problema con esta es que la sinstanxis es poco amigable, y para póder usar la
  variable system es necesario un archivo de configuracion*/


  /*Estas son las formas de escribir modulos en javascript*/


/* 
	¿Qué es un modulo en javascript?

	Básicamente un modulo es un paquete de codigo. 
	Un modulo es un pedazo de código encapsulado que se encarga de resolver alguna cosa en particular.
	Las razones por las cuales nosotros vamos a querer escribir un modulo son dos, la primera es encapsulamiento. 
	Todo lo que pasa en un pedazo de codigo tiene que ser local a ese pedazo de codigo, de esa manera cada parte del codigo se hace responsable de cumplir una tarea. 
	NO es que hacemos un modulo que hace un monton de cosas , sino que cada modulo debe ser pequeño y encargarse de una sola responsabilidad.
	La segunda razon por la cual nosotros queremos escribir un modulo son las dependencias.

	Como crear un módulo

	Existen varias manera de escribir un modulo, como por ejemplo con commonjs, amd, y el nuevo metodo de ecmascript 2015.
	La manera de crear modulos usando el metodo de ecmascript 2015 es la manera mas utilizada y mas facil de implementar. 
	Basicamente hacemos import y export en cada modulo. 
	Por ejemplo si tenemos un modulo que se llama cuadrado que sirve para calcular cosas de un cuadrado podemos utiliar este modulo en otro modulo importandolo


	Distintas formas de escribir módulos en JavaScript
	Sistemas de Módulos

	¿Qué es un módulo?
	¿Por qué queremos escribir un módulo?

	Encapsulamiento

	Cada módulo debe ser pequeño y enfocado en una funcionalidad.
	Capsulas de código que se pueden reutilizar.
	Ejemplos de esto son Angular y Node.
	Un módulo es un paquete de código.
*/