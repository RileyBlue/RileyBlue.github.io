setTimeOut(function callback() {
	console.log("Mensaje A")
}, 0)

console.log("Mensaje B")

/*
	Esta función que está definida, la podemos usar desde cualquier lugar, lo que hace, el primer parámetro.
	Es el callback y como segundo parámetro el tiempo en milisegundos que tiene que transcurrir para que se ejecute.
*/

/*
	Los callbacks de JavaScript
	JavaScript cuando ejecuta código lo hace de manera síncrona, pero una forma que tiene de ejecutar código asíncrono es con las funciones llamadas “Callbacks”
	Éstas se ejecutan y nos devuelven el proceso, generalmente después de algún evento de tiempo, al completarse un request o al terminar de leer un archivo.

	Recuerda:

		- El tiempo que le demos a los procesos es un tiempo mínimo. JavaScript puede no respetarlos, todo depende del peso de las tareas que tengamos en la cola de ejecución.
		- Para evitar los cuellos de botella en los procesos y delega tareas pesadas y con mucho tiempo de ejecución a otros microservicios.
*/

/* 
	Los callbacks son un tema un poco complejo, pero bien explicados pueden ayudarte a mejorar tu código.

En Javascript, las funciones son objetos de primera clase, esto es, que las funciones son del tipo objeto y pueden ser usadas como cualquier otro objeto en Javascript (Strings, Arrays, Numeros, etc).

Así que por el simple hecho de ser objetos, las funciones pueden ser almacenadas en variables, pueden ser argumentos de otras funciones, pueden ser creadas dentro de funciones y pueden retornarse desde las funciones.

Por ser objetos de primera clase, podemos pasar una función como argumento y para después ejecutarla o retornarla para ser ejecutada después.

En principio, de esto se tratan los callbacks en Javascript.

Que es un Callback o un Callback Function?

Un callback o callback function, conocido también como high-order function, son funciones que son pasadas como parámetro en otra función(llamemos esta funcionPadre), y el callback function es llamada o ejecutada dentro de la funcionPadre.

Ejemplo:

var friends = ["Mike", "Stacy", "Andy", "Rick"]; ​ friends.forEach(function (eachName, index){ console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​ });

En este ejemplo, nosotros pasamos como parámetro una función anónima (una función sin nombre) a el método forEach. Esto en teoría es un callback.

O aún más sencillo, un callback es una función que se ejecutará después, cuándo otra función haya terminado de ejecutarse, de ahí el nombre callback.

Ahora les mostrare un ejemplo más claro de como implementar callback en un día cotidiano:

`//Este es un simple creador de gatos que hace console.log de algunas frases

//Además de que pasaremos el método o función ‘catCreator’ como callback en la función de abajo

function catCreator(name, age, color) {
console.log(’${name} is your new cat’);
console.log(‘she has ${age} years old’);
console.log(‘and she’s ${color}’);
console.log(‘A cat like ${name}, even thoght she’s ${age} years old, and with his increadible ${color} color, she’s a lovely cat’)
}

//El callback, que es el último parámetro de la función ‘getCatInfo’, será la función ‘catCreator’, que definimos arriba

function getCatInfo(name, age, color1, color2, callback) {
var fullColor = color1 + " and " + color2;

//Siempre es bueno veficar que nuestros callback sean una función, justo como lo hago abajo

if(typeof callback === “function”) {

//Executamos el callback y pasamos le pasamos los parámetro

callback(name, age, fullColor);
}
}`

`//Y aquí simplemente llamamos a la función ‘getCatInfo’ y pasamos los atributos del gato y la función ‘catCreator’ como callback

getCatInfo(‘Catatita’, 15, “white”, “brown”, catCreator)

//Output

/*

“Catatita is your new cat”
“she has 15 years old”
“and she’s white and brown”
“A cat like Catatita, even thoght she’s 15 years old, and with his increadible white and brown color, she’s a lovely cat”

*/
`
Como la función ‘getCatInfo’ solo está manejando datos algunos datos sencillos, le podemos pasar cualquier otro callback, por ejemplo:

`function catAttributes(catName, age, color){
console.log('Cat Name: ${name}, Cat Age: ${age}, Cat Color: ${color} ')
}

getCatInfo(‘Catatita’, 15, “white”, “brown”, catAttributes)

//Output
/*
"Cat Name: CodePen, Cat Age: 15, Cat Color: white and brown "
*/`

Como pueden ver, llamamos la misma función ‘getCatInfo’ y pasamos otra función y pudo realizar otra tarea totalmente diferente.

Como pueden ver hay muchas tareas que podemos realizar sin utilizar tanto código, los ejemplos de arriba fueron sencillos, pero bien utilizados los callbacks pueden ayudarnos a mantener nuestro código más limpio, consistente y escalable.

A pesar de tener problemas como el callback hell, pero esto no es tan común de verlo en el fronted, (y si pasa tenemos las promesas o los generadores), pero si en node.js.

También es importante aclarar que los callbacks nos ayudan a tener un mejor control sobre las funciones que escribimos y cuando queremos que estas se ejecuten.

De igual manera les explico muy rápido y no con código, porque los callbacks nos pueden y nos ayudan bastante.

Imaginemos que tenemos un robot que nos ayuda con las tareas del hogar. A este robot le asignamos un par de tareas, tales como: pedir una pizza, limpiar el piso, lavar las ventas y planchar.

En este caso como nuestro robot no es muy hábil, cuando pida la pizza esperará la media hora hasta que esta llegue y pueda continuar con las demás tareas(Callbacks sincrónos). Esto atrasaría las demás tareas bastante y sería una perdida de tiempo total.

Pero si en cambio le enseñamos a nuestro robot a no esperar por este tipo de tareas en donde no tiene nada que hacer hasta que se terminen para pasar a la siguiente, podremos tener un robot mucho más eficiente(Callbacks asincrónos).

Esto en javascrip, como ejemplo sería el de un botón que queremos que un usuario interactué con el, si no lo hacemos con código asincróno, todas las demás funciones tendrían que esperar hasta que esto suceda! Por esto son tan importantes los callbacks en javascript.

Espero este pequeño aporte les ayude a entender un poco más los callbacks, si no les quedo bien claro del todo.

Les dejo una serie de recursos a los que pueden acceder para tener más información sobre como funcionan los callbacks:

Videos:

What is a callback? (https://www.youtube.com/watch?v=xHneyv38Jro)

Callback Functions in JavaScript (https://www.youtube.com/watch?v=GxyFlXbhdsY)

Higher-order functions - Part 1 of Functional Programming in JavaScript (https://www.youtube.com/watch?v=BMUiFMZr7vk&t=37s)

Handling DOM Events with Callbacks (https://www.youtube.com/watch?v=NcCEzzd9BGE)

Javascript Callbacks and asynchronous Explained (https://www.youtube.com/watch?v=LK8VxrDDCsk)

Artículos:

Callbacks in Javascrip (https://zellwk.com/blog/callbacks/)

JavaScript Callbacks Explained Using Minions (https://medium.freecodecamp.org/javascript-callbacks-explained-using-minions-da272f4d9bcd)

Javascript- from callbacks to async/awit (https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99)

Understand JavaScript Callback Functions and Use Them (http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

JavaScript: What the heck is a Callback? (https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

