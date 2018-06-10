// ¿Cuántos Kms corre una persona en promedio? Entendiendo el ciclo For
const name = 'Ohm'

const days = [
	"lunes",
	"martes",
	"miércoles",
	"jueves",
	"viernes",
	"sábado",
	"domingo"
]

function running() {
	const min = 5;
	const max = 15;
	return Math.round(Math.random() * (max - min)) + min;
}

let totalKm = 0;
const length = days.length;

for (let i = 0; i < length; i++) {
	const km = running()
	totalKm += km;
	console.log(`El día ${days[i]} ${name} corrió ${km} km`);
}

const averageKm = totalKm / days.length;
console.log(`En promedio ${name} corrió un total de ${totalKm} kilómetros con un promedio de ${averageKm.toFixed(2)} km por día`)