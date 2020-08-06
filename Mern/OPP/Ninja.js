class Ninja{
    constructor(name,health){
        this.speed = 3;
        this.strength = 3;
        this.health = health;
        this.name = name;
    }
    drinkSake(){
        this.health +=10;
    }
    sayName(){
        console.log(`Ninja ${ this.name }`);
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.strength)
    }
}

const ninja1 = new Ninja("Hyabusa", 200);
ninja1.sayName();
ninja1.showStats();
console.log(ninja1)

class Sensei extends Ninja{
    constructor(name,health,wisdom){
    super(name, health)
    this.wisdom = 10;
    }
    speakWisdom(){
        console.log(`Sensei Wisdom ${ this.wisdom }`);
        this.drinkSake()
    }  
//     showStats(){
//         console.log(this.name, this.health, this.speed, this.strength)
//     }    
}

const superSensei = new Sensei("Master Splinter", 70);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"