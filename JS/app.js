class Tamagotchi {

	constructor(name, age, hunger, sleepiness, boredom) {
		this.name = name;
		this.age = age;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
	}
}

	const thomas = new Tamagotchi("Thomas", 0, 0, 0, 0);

console.log(thomas);