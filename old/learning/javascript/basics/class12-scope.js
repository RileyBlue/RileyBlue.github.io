// Scope Global
var name = "Ohm"

function greeting() {
	// Scope dentro de una función
	// El scope queda definido al contexto interno de una función
	console.log(`Hello ${name} `)
}

function greetingX10(name) {
	for (i = 0; i < 10; i++) {
		console.log(`Hola ${name} `)
	}
	console.log(`El valor de i es: ${i}`)
}

greetingX10("Tony")

/*
	Entiende el scope de las variables
	Escope es el conjunto de variables y funciones que podemos llamar en una parte del código
	Si definimos una variable en el scope global (window en el navegador) podemos acceder a ella dentro de cualquier lugar del código.
	Si definimos una variable dentro de una función solo lo podemos utilizar dentro de esa función si lo declaramos con var, 
	si lo declaramos con let solo podemos acceder a ella en el bloque de código.
*/

// Hoisting 
/* 
  Las variables JavaScript pueden hacer referencia a una variable declarada más tarde, sin obtener un error. Este concepto es conocido como hoisting, 
  es decir, una variable declarada se “eleva” o “sube” a la parte superior de la función (closure) en la que se encuentra, independientemente de donde la declaremos.
*/

/* 
	Como entender el Scope de Javascript
	Para todos aquellos que no logran entender del todo el Scope, aqui les dejare un ejemplo y más recursos en donde encontrarán más información sobre el Scope:
*/
	//Burbuja 1
	function foo(a) {
		//Burbuja 2
		var b = a * 2;
		function bar (c) {
			//Burbuja 3
			console.log(a,b,c);
		}
		bar(b * 3)
	}

foo(2); // 2 , 4, 12
/* 
	El scope, también llamado contexto o alcance, es el ámbito que tienen las variables para poder ser utilizadas, depende mucho de con qué palabra reservada (let, var, const) se declaren las variables para que éstas pueden tener un comportamiento determinado en los scopes.

	Var: Con var existe algo llamado hoisting, que consiste en que las variables se “elevan” al principio de la función en donde fueron declaradas, incluso si fueron declaradas dentro de un scope, lo que hace var es declarar esa variable al principio de la función.
	
	Let: let es la forma correcta con la que debemos de declarar las variables, ya que respeta el scope y no genera información innecesaria

	Const: const es la palabra ideal que representa que un programador tiene el cuidado y el conocimiento necesario para poder declara una variable que no va a cambiar.
	En conclusión, lo ideal es saber qué usar con base a nuestras necesidades, pero lo que si es cierto es que no se recomienda usar var.
*/

/*
	Los Scopes de este código funcionan de la siguiente manerá:
	Burbuja 1 engloba el Scope Globlal (windows.ejemplo), y este tiene solo una variable(por asi llamarlo, o un identifier): foo.
	Burbuja 2 engloba el Scope de foo y este tiene tres variables: a, bar y b.
	Burbuja 3 engloba el Scope de bar y este tiene solo una variable; c.
	Esto quiere decir que cada burbuja o Scope son definidas dependiendo de en que bloque del Scope son escritas.
	Otro concepto muy importante que tienen que saber como puedes usar las variables dentro de los Scopes. 
	Para esto quiero usar una clase de antología divertida que nos ayude a entender:

	Imaginen que un Padre y su hijo van juntos a comprar galletas, galletas de chocolate para el padre y de fresa para el hijo. El padre como bueno que es comparte de sus galletas con el hijo, pero el hijo como es malo, no le gusta compartir con su padres de sus galletas.

	Esto como se traduce en código?
*/

	functionpadre() {
		var galletasDeChocolate = 'galletas de papá';

		functionhijo() {
			var galletasDeFresa = 'galletas del hijo'
			console.log(galletasDeChocolate)
		}
		hijo()
		console.log(galletasDeFresa)
	}

	padre() 
	
	//Galletas de Papá
	// galletasDeFresa is **not defined at padre**

/* 
	Como ven el hijo es un poco envidioso con el padre, pero el padre no lo es y siempre comparte con su hijo de sus galletas.
	El concepto de Scope es un poco complicado al inicio, pero como ven, no es tan intimidante como parece, 
	pero si realmente quieren aprender como funciona, les dejo los siguientes links para que puedan entenderlo aún mejor:

	Libro You Don’t Know JS (https://github.com/getify/You-Dont-Know-JS/blob/master/scope %26 closures/ch1.md).
	Este capitulo en especial de YDKJS te enseña muy a fondo como funciona, explicando desde como se complia el codigo (Javascript si se compila a su nivel), como funciona el Scopre y los errores que pueden surgir al escribir código, muy recomendado.

	**Javascript Scope Tutorial - What Makes Javascript Weird…and Awesome **(https://www.youtube.com/watch?v=SBwoFkRjZvE)
	Este video, te da una explicación más corta, pero muy enfocada a como funciona el Scope.
	Understanding Scope in Javascrip (https://scotch.io/tutorials/understanding-scope-in-javascript)
	Este es un artículo muy muy completo sobre como el Scope funciona, y asi mismo como funciona: The context, The Execution Context, The Lexical Scope, The Public and Private Scope, etc.
	Les recomiendo leer y ver todos los videos, para entender como funciona un concepto tan core de Javascript, como lo es el Scope, esto les ayudará a escribir mejor código y código más eficiente.
*/

/*
	Scope Conjunto de variables y funciones al cual podemos acceder en una determinada linea de código
	Closures Funciones que recuerdan el scope (encotorno) en el que fueron creadas y pueden acceder a todas la variables y funciones que pertenecen a ese scope pero con los valores que tienen al momento en que se invoca ese closure

	**Let ** permite asignar valor a nuestras variables con visibilidad / validez únicamente dentro del contexto (llaves {}) en el que se ha definido.
	Hoisting Las variables JavaScript pueden hacer referencia a una variable declarada más tarde, sin obtener un error. Este concepto es conocido como hoisting, es decir, una variable declarada se “eleva” o “sube” a la parte superior de la función (closure) en la que se encuentra, independientemente de donde la declaremos.
*/