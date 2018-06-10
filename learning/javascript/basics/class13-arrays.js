const add = (...numbers) => numbers.reduce((acum, number) => acum += number, 0)
const double = (...numbers) => numbers.map(number => number * 2)
const even = (...numbers) => numbers.filter(number => number % 2 == 0)

add(4, 8, 12, 8954, 7)

/* 
	Operaciones con arrays
	Los arrays son una forma de guardar nuestros datos muy importante en JavaScript, en este vídeo veremos como trabajar con Arrays.

	Si queremos hacer una función que reciba N parámetros y devuelva la suma de estos, podemos escribirla como:

*/

function suma(...params) {
  return params.reduce((acumulativo, actual) => {acumulativo + actual}, 0)
}

suma(4,5,6,23,26,7,8)

/* 
	De esta forma utilizamos el método reduce con el cual cuentan los arrays, este nos permite ir iterando por todo el array y acumulando el valor en una variable.
	Ahora queremos ejecutar una operación sobre todos los elementos del array, para esto tenemos un método llamado map
*/

function doble(...params) {
  return params.map(x=>x*2)
}

doble(2,3,4,5,6,7,5)

// Si queremos filtrar ciertos valores de un array, tenemos otro método para poder hacer esto con keyword
const pares = (...numeros) => numeros.filter(x=> x % 2 == 0)

/* 
	Trabajar con las funciones que tienen los arrays es una muy buena práctica, de esa manera podemos reducir nuestro código monstruosamente.
	Las siguientes funciones reciben como parámetro una función que se ejecuta por cada elemento del array:
		Reduce: La función parámetro recibe un acumulador y el elemento actual del array, suma el elemento al acumulador y retornando el acumulador para que pueda ser usado con el siguiente elemento, reduce también puede recibir otro elemento, que es valor inicial del acumulador.
		Map: La función parámetro ejecuta algo sobre cada elemento actual del array
		Filter: La función parámetro realiza un filtro en base a una condición y en base a ese resultado incluye o no al elemento actual del array.