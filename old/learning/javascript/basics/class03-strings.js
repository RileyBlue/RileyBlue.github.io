// Inventing a new language 
function platzom(str) { 
  let translation = str;

  // Si la palabra original es un palíndromo
  // Ninguna regla anterior cuenta y se devuelve 
  // La misma palabra intercalando mayúsculas y minúsculas. 
  const reverse = (str) => str.split('').reverse().join('');

  function minMay(str) {
  	const length = str.length;
  	let translation = '';
  	let capitalize = true;

  	for (let i = 0; i < length; i++) {
  		const char = str.charAt(i);
  		translation += capitalize ? char.toUpperCase() : char.toLowerCase();
  		capitalize = !capitalize;
  	}

  	return translation;
  }

  if (str == reverse(str)) {
  	return minMay(str);
  }

  // Si la palbra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
  	translation = str.slice(0, -2);
  }

  // Si la palabra comienza con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
  	translation += 'pe';
  }

  // Si la palabra traducida tiene 10 o más letras se debe partir a la mitad y unir con un guión.
  const length = translation.length;
  if (length >= 10) {
  	const firstHalf = translation.slice(0, Math.round(length / 2));
  	const secondHalf = translation.slice(Math.round(length / 2)); // Si no se le manda un segundo parámetro lo toma hasta el final.
  	translation = `${firstHalf}-${secondHalf}`;
  }
  return translation;
}

console.log(platzom("Programar")); //Program
console.log(platzom("Zorro")); // Zorrope
console.log(platzom("Zarpar")); //Zarppe
console.log(platzom("abecedario")); // abece-dario
console.log(platzom("sometemos")); // SoMeTeMoS

/* Los strings son cadenas de texto como palabras, frases, etc.

cuando ejecutamos métodos sobre un string estos no se modifican, debemos asignarlo a otra variable.

Cada letra del texto tiene un indice y este indice comienza en 0, por ejemplo

“platzi” seria

0 = P
1 = l
2 = a
3 = t
4 = z
5 = i
También podemos comenzar a contar su indice desde el final,

-6 = P
-5 = l
-4 = a
-3 = t
-2 = z
-1 = i

Concatenar
Podemos unir dos string utilizando el operador +, por ejemplo:

const palabra = \'Pla\' + \'tzi\' 

palabra == \'Platzi\'
Convertir a arrays
Podemos convertir los arrays a caracteres con el metodo split diciéndole por cual carácter dividirlo, por ejemplo

let str = \'hola\'

str.split(\'\') == [\'h\',\'o\',\'l\',\'a\']
También podemos unir un array y convertirlo en un array usando el metodo join

let arr = [\'h\',\'o\',\'l\',\'a\']

arr.join(\'\') == \'hola\'
Metodos utiles.
str.toUpperCase() // convierte el texto a mayúscula
str.toLowerCase() // convierte el texto en minúsculas
str.endsWith(\'\') // evalúa si el string termina con un texto
str.startsWith(\'\') // evalúa si un string comienza con un texto
str.slice(inicio, final) // partir un carácter
str.length // cuantos caracteres tiene el string 

*/ 