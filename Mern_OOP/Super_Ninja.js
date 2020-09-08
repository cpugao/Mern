class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log("Name: " + this.name);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        console.log("Health: " + this.health);
    }
    drinkSake(){
        this.health += 10;
        console.log(`What one programmer can do in a month, two programmers can do in two months.`);
    }
}

class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log(message)
    }
    showStats(){
        super.showStats();
    }
}