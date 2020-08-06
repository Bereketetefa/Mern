class RedBeltNinja{
    constructor(name){
        this.cost = 3;
        this.power = 3;
        this.resilience = 4;
        this.name = name;
    }
    attack(target){
        this.cost += 1;
        this.resilience -=2;
        this.power -= 2;
    }
    hardAlgorithim(target){
        this.resilience +=3;
        this.cost -=2;
    }
    UnhandledPromise(target){
        this.resilience -=2;
        this.cost -=1;
    }
    pairProgramming(target){
        this.power +=2;
        this.cost -=3;
    }
    sayName(){
        console.log(`Player 1 ${ this.name }`);
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.strength)
    }
}

class BlackBeltNinja extends RedBeltNinja{
    constructor(name){
    super(name)
        this.cost = 4;
        this.power = 5;
        this.resilience = 4;
    }  
}

const player1 = new BlackBeltNinja("Tim");
const player2 = new RedBeltNinja("moby");

player1.hardAlgorithim(player2)
console.log(player1);

player2.UnhandledPromise(player1)
console.log(player2);

player1.pairProgramming(player2)
console.log(player1);

player1.attack(player1)
console.log(player1);
