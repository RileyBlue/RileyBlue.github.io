function canWatchStarWars7(name, age, isWithAdult = false) {
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7} `)
	} else if (isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}. Aunque su edad sea de ${age}, ya que se encuentra acompañado por un adulto `);
	} else {
		alert(`${name} no puede pasar a a ver ${starWars7}. Tiene ${age} años y necesita tener ${pgStarWars7} `);
	}
}

canWatchStarWars7(nameOhm, ageOhm);
canWatchStarWars7(nameSanti, ageSanti, true);

/* Repaso condicionales:
Un condicional nos permite ejecutar determinado bloque de código según la condición que se cumpla. Hay que tener claro que el bloque de código dentro de una condición se ejecuta si y solo si la condición se cumple. De lo contrario, se buscará otra condición a evaluar, si no hay más ejecuta el código dentro del else, pero si no hay else y ninguna condición se cumple, no se ejecuta nada.
Operadores booleanos para condicionales:

< menor que
> mayor que
<= menor o igual
>= mayor o igual
== igual valor
!= diferente
=== igual valor y tipo de variable
&& and
|| or
Estructura condicional if, else if, else JS: */

if ( age >= 18 ) { 
	console.log('Puedes llegar tarde a tu casa')
}
elseif (age < 18 && isWithParents ) {
	console.log('Puedes llegar tarde a tu casa porque estas con tus padres')
}
else {
	console.log('No puedes llegar tarde a tu casa')
}
