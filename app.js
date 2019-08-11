var pokemon_1 = {
	name: 'pikachu',
	health: 100,
	attack: randomRange(40, 50),
	show_info: function(){
		return `${this.name}: Health: ${this.health}, Attack: ${this.attack}`
	}
}

var pokemon_2 = {
	name: 'jigglypuff',
	health: 100,
	attack: randomRange(40, 50),
	show_info: function(){
		return `${this.name}: Health: ${this.health}, Attack: ${this.attack}`
	}
}

var turno = randomRange(0, 1);
var round = 1;

console.log('PLAYER INFO');
console.log(pokemon_1.show_info());
console.log(pokemon_2.show_info());
console.log('FIGHT!');

while(pokemon_1.health > 0 && pokemon_2.health > 0){
	if(turno){
		console.log('Round ' + round++ + ' | ' + pokemon_1.name + ' Attack!');
		pokemon_2.health -=  pokemon_1.attack;
		show_info();
		turno = 0;
	}else {
		console.log('Round ' + round++ + ' | ' + pokemon_2.name + ' Attack!');
		pokemon_1.health -= pokemon_2.attack;
		show_info();
		turno = 1;
	}
}

if(pokemon_1.health <= 0){
	console.log(pokemon_2.name + ' WON!');
}else {
	console.log(pokemon_1.name + ' WON!');
}

function show_info(){
	console.log(pokemon_1.show_info());
	console.log(pokemon_2.show_info());
	console.log('---------------------------------');
}

function random(value){
	var resultado = Math.floor((Math.random() * value) + 1);
	return resultado;
}

function randomRange(min, max){
	var resultado = Math.floor((Math.random() * (max-min + 1)) + min);
	return resultado;
}