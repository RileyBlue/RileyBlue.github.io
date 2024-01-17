// Triangle Area 
let base = 4;
let height = 7;

const triangleArea = (base, height) => base * height / 2;

// Se puede interpolar el uso de las variables dentro de una cadena usando comillas invertidas `` y el signo ${} 
console.log(`El área del triángulo cuya base es: ${base} y altura es: ${height} 
es de ${triangleArea(base, height)} `);

// Watching movies If - Else Conditionals
const starWars7 = 'El despertar de la fuerza';
const pgStarWars7 = 13;
const nameOhm = 'Omar';
const ageOhm = 28;
const nameSanti = 'Santi';
const ageSanti = 10;

/* Existen dos tipos de funciones:
   Anónimas: No requieren de nombre y no pueden ser llamadas/invocadas desde otros lugares.
   Declarada: Estas funciones por el contrario, poseen un nombre y son invocadas haciendo uso de su nombre
*/ 

/* Arrow Function 
   Nos permiten ejecutar funciones sencillas. Así como permitirnos acortar ciertas palabras que en una función normal debemos hacer, por ejemplo, podemos eliminar la palabra reservada function, obviar las llaves si es una función corta.
*/ 