/* ¿Cuánto tiempo pasó desde tu fecha de nacimiento?
¿Cómo calcularías cuanto tiempo paso desde la fecha de tu nacimiento?
Primero debemos crear la fecha de nacimiento, en JavaScript podemos ejecutar new Date() y puede recibir una fecha con año, mes (restandole 1), dia.
Segundo debemos crear la fecha actual, para esto ejecutamos new Date(), esto nos devuelve la fecha actual
Tercero, podemos restar estas dos fechas.
De esta forma podemos calcular cuanto tiempo ha pasado desde nuestra fecha de nacimiento en mili segundos
*/
const born = new Date(1989, 6, 26)
const today = new Date()
const time = today - born

const secondsInLife = time / 1000
const minutesInLife = secondsInLife / 60
const hoursInLife = minutesInLife / 60
const timeIndays = hoursInLife / 24
const timeInYears = Math.floor(timeIndays / 365)
const timeInMonths = Math.floor(( timeIndays - ( timeInYears * 365 )) / 31)
const daysComing = Math.floor(( timeIndays - (timeInYears * 365 )) - (timeInMonths * 31))

const nextBirthday = new Date(today.getFullYear(), born.getMonth(), born.getDay())
const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

console.log(`Tu próximo cumpleaños será un ${days[nextBirthday.getDay()]} `)