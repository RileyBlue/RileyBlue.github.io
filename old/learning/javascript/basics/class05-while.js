// ¿Quién gana en una pelea: Gokú o Superman? Resolviendo este problema con ciclos while
let lifeGoku = 100;
let lifeSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

const bothAlive = () => lifeGoku > 0 && lifeSuperman > 0

const calculatePunch = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER

const gokuStillAlive = () => lifeGoku > 0

let round = 0;

while(bothAlive()) {
	round++;
	console.log(`Round ${round} `)

	const punchGoku = calculatePunch() 
	const punchSuperman = calculatePunch()

	if (punchGoku > punchSuperman) {
		// Ataca Gokú
		console.log(`Gokú ataca a Superman con un golpe de ${punchGoku} `)
		lifeSuperman -= punchGoku
		console.log(`Superman queda en ${lifeSuperman} `)
	} else {
		// Ataca Superman
		console.log(`Superman ataca a Gokú con un golpe de ${punchSuperman} `)
		lifeGoku -= punchSuperman
		console.log(`Goku queda en ${lifeGoku} `)
	}
}

if (gokuStillAlive()) {
	console.log(`Gokú ganó la pelea. Su vida es de: ${lifeGoku} `)
} else {
	console.log(`Superman ganó la pelea. Su vida es de: ${lifeSuperman} `)
}