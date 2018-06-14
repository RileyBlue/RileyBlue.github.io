/*
	COMO FUNCIONA EL EVENTLOOP
	Javascript es un lenguaje que solo puede ejecutar una cosa a la vez
*/


functionsaludar(nombre){// 4 -> javascript carga esta funcion
  console.log(`hola ${nombre}`)// 5 -> javascript ejecuta este console.log() una vez que es ejecutada la elimina de la pila y continua
	// 6 -> si existieran mas console.log() o logica la ejecutaria en orden decendente, hasta encontrarse con un llamado a una funion
}

functioninit (){// 2 ->javascript carga esta funcion en memoria
  saludar(`alexis`)// 3 ->javascript ejecuta esta instruccion que es un lllamado a la funcion salufar
}

init()// 1 ->esta linea es la primera en ejecutarse, ya que es un llamado a una funcion

// 7 -> una vez que termina la ejecucion javascript limpia la pila eliminando los elementos de la misma desde el ultimo al primero en cargarse
/*
como  javascript no puede ejecutar mas de una instruccion al mismo tiempo, si ejecutamos una accion que consume mucho
tiempo javascript no permite realizar otras acciones mientras esta ejecutando algo, por lo cual no podemos cargar mensajes de alerta o similares


lo que podemos hacer para evitar trabar la pila es delegar

*/

console.log(`Hola`)// 1 -> es lo primero en ejecutarse, una vez ejecutado sale de la pila

setTimeout ( function() {// 2 javascript carga esta instruccion, y delega la ejecucion del timeout a otro proceso,
  // pasandole como parametro la funcion y el tiempo de espera. despues de esto lo elimina de la pila y ejecuta la siguiente funcion
/*Pero cuando se ejecuta esta funcion?
 4 una vez que javascritp termina con la pila de ejecucion pregunta sihay tareas en la cola de ejecucion (revisa los procesos que delego)
si la cola de ejecucion tiene alguna tarea pendiente la carga en la pila, la ejecuta y luego la borra de la pila*/

  console.log('medio')
})

console.log(`chao`)// 3 carga y ejecuta el console.log, y lo saca de la pila



/*FUNCIONES

setTimeOut() -> esta funcion hace una llamada a otro proceso, ya sea el navegador o alguna libreria de c++ o nodejs,
                y lo que hace es pedirle a otro proceso que ejecute el setTimeOut y al terminar de ejecutarse llame
                a la funcion que esta dentro

    Manten la pila de ejecucion limpia!! 

*/


/*
	No generes un cuello de botella en el EventLoop
	¿Cómo ejecuta JavaScript el código?

	Lo primero que se ejecuta es la declaración de las funciones.
	Cuando JavaScript ejecuta una línea la carga en una pila de ejecución.

	JavaScript solo ejecuta una cosa a la vez, por esto, debemos tenerla lo más limpia posible.
	Sin embargo, puede delegar la ejecución de otras cosas.

	Esto les ayudara a entender mejor este seccion (Procesos Asíncronos):

	Los procesos asíncronos son aquellos en los que el proceso de ejecución se produce en diferentes tiempos.
	Por ejemplo: En un trabajo colaborativo un empleado deja mensaje para que los miembros del grupo cuando dispongan de tiempo lo miren y dejen sus comentarios o respuestas, pero mientras el usuario seguirá haciendo el resto de sus trabajos pendientes.

	Los procesos síncronos son aquellos los cuales se ejecutan uno detrás de otro y hasta que el proceso actual no finalice su ejecución no se pasará a ejecutar el siguiente proceso.
	Por ejemplo: ¿Quien quiere ser millonario?
	Aquí el presentador realiza un pregunta, posteriormente el participante debera responder cada pregunta.
	Hasta que esa pregunta no haya finalizado el presentador no proseguirá a realizar otra pregunta.
*/