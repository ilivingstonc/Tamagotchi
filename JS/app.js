const img = $("<img/>");


class Tamagotchi {

	constructor(name, age, hunger, sleepiness, boredom) {
		this.name = name;
		this.age = age;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
	}

	makeTamagotchi() {
	img.attr('src', 'https://cdn.pixabay.com/photo/2019/07/01/04/36/elephant-4309164_1280.png');
	img.css("height", "100px");
	$(".tamagotchi").append(img);
	}
}


	const newTom = new Tamagotchi("Thomas", 0, 0, 0, 0);
	newTom.makeTamagotchi();

//ask user to name their tamagotchi
function nameTamagotchi() {
	let nameForBaby = prompt(`Please name your Tamagotchi pet`);
	$(".name").append(nameForBaby);

}
//calling function nameTamagotchi
nameTamagotchi();

//seting age timer

let ageTimer = 0;
setInterval(ageCounter, 1000);


//age function
function ageCounter() {
	$(".age").html(`age: ${ageTimer++}`);
	Tamagotchi.age = ageTimer
	morphTamagotchi();

}	//defining timer variables

ageCounter();

//hunger function

let hungerTimer = 100;
setInterval(hungerCounter, 100);
Tamagotchi.hunger = hungerTimer;

//age function
function hungerCounter() {
	$(".hungry").html(`hungry: ${hungerTimer--}`);
	if (hungerTimer === 0) {
		alert(`Your tamagotchi pet has starved, you're a failure and a loser.`);
		location.reload();

	}
}	//defining timer variables

hungerCounter();


//sleepy function
let sleepyTimer = 100;
setInterval(sleepyCounter, 200);
Tamagotchi.sleepiness = sleepyTimer;

function sleepyCounter() {
	$(".sleepy").html(`sleepiness: ${sleepyTimer--}`);
	if (sleepyTimer === 0) {
		alert(`Your tamagotchi pet has died from exhaustion. It prolly got tired of looking at your stupid face...`);
		location.reload();
	}	 
}	//defining timer variables

sleepyCounter();

//display boredom
//sleepy function
let boredomTimer = 100;
setInterval(boredCounter, 50);
Tamagotchi.boredom = boredomTimer;

function boredCounter() {
	$(".bored").html(`boredom: ${boredomTimer--}`);
	if (boredomTimer === 0) {
		alert(`Your tamagotchi pet has died of boredom, you're a boring moron. A boron.`);
		location.reload();
	}
}	//defining timer variables

boredCounter();

//add click button for nap time
$(".sleepyButton").on('click', (e) => {
	sleepyTimer = 100;
});

//add click button for feeding time
$(".hungryButton").on('click', (e) => {
	hungerTimer = 100;
});
//add click button for play time
$(".boredButton").on('click', (e) => {
	boredomTimer = 100;
});

//after tamagotchi turns 10 years old, update image
	//after tamagotchi turns 20 years old, update image again

function morphTamagotchi() {
		if (Tamagotchi.age > 5 && Tamagotchi.age < 10) {
			img.attr('src', 'https://cdn.pixabay.com/photo/2017/07/17/14/46/mammoth-2512585_960_720.png');
			img.css("height", "300px");
			$(".tamagotchi").append(img);	
		} else if (Tamagotchi.age > 10) {
			img.attr('src', 'https://cdn.pixabay.com/photo/2017/02/19/11/44/animal-2079510_1280.png');
			img.css("height", "500px");
			$(".tamagotchi").append(img);
		}

	}


// 	img = $("<img/>");
// 	img.attr('src', 'https://pixabay.com/illustrations/animal-mammoth-hair-fur-teeth-2079510/');
// 	img.css("height", "150px");

// 	$(".tamagotchi").append(imgTeen);
// 	}
// }




//if tamagotchi dies, display alert saying its dead
	//flip tamagotchi 180 degrees on its back


//after tamagotchi turns 15, ask if user wants tamagotchi to
//have a "playdate" with a friend

	//if yes, add another tamagotchi (same image as baby)









