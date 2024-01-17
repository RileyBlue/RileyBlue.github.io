const ohm = {
  name: 'Ohm',
  lastName: 'Sainz'
}

function greeting (times, uppercase) {
  let str = `Hey ${this.name} ${this.lastName}`
  str = uppercase ? str.uppercase : str
  for (let i=0; i < times; i++) {
    console.log(str)
  }
}

greeting.call(ohm, 3) //Ejecutar la función Greeting enviándole los parámetros y el contexto.
greeting.call(ohm, 3, true)
greeting.apply(ohm, [3, true]) //Ejecutar la función Greeting enviándole el contexto. Los parámetros se envían a modo array.

const params = [3, true]
greeting.call(ohm, ...params) // Esto nos ayuda a manejar un array y al momento se ejecutar la función, separa los parámetros por comas.
greeting(3)

/*
	Call y apply
  Con call y apply podemos definir el valor de this y ejecutar la función
*/

/* 
  Metodo bind(): Es un método de todas las funciones, el cual nos devuelve una función para ser invocada en cualquier momento. 
  Se caracteriza por permitirnos definir el scope-contexto y por permitir establecer previamente los parametros
  const newFunction = fun.bind(contexto, primerParametro)// Establece el scope y el-los parametros de fun

  newFunction(segundoParametro) // Ejecuta fun pero con la caracteristica de que ya esta establecido el scope y los parametros. 
  Igualmente nos permite enviarle más parametros a fun si es el caso
  -Métodos call() y apply(): A diferencia de bidn(), call() y apply() ejecutan la función “padre” instantaneamente. 
  De igual forma nos permiten establecer el scope y los parametros con la pequeña diferencia de que apply, recibe los parametros en un array.
*/

fun.call(contexto, primerParametro, segundoParametro)//Ejecuta fun en el scope establecido y con los parametros enviados

fun.apply(contexto, [primerParametro, segundoParametro)//Ejecuta fun en el scope establecido y con los parametros enviados en el array