const defaultAttributeScores = [15, 14, 13, 12, 10, 8];

// Fisher-Yates algorithm for randomly sorting an array
// from: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// adapted to JS and reconfigured to return a new (non-mutated) array
function shuffleArray(targetArray){ 
    let shuffled = Array.from(targetArray); //clones the array rather than copying it.
    for (let i = shuffled.length - 1; i>0; i--){
        const j = Math.floor(Math.random()* (i+1));
        const temp = shuffled [i];
        shuffled[i]=shuffled[j];
        shuffled[j]=temp;
    }
    return shuffled;
}

function diceRoller(times,sides){
    let results = [];
    for (let i=0; i<times; i++){
        results.push(Math.floor(Math.random()*sides+1));
    }
    return results;
}

function sumArrayElems(array){
    return array.reduce((total, currentNumber) => total + currentNumber);
}
class Player{
    constructor(charName ='Naruto'){ //naruto = default parameter
        this.name = charName;
        this.attributes = {
            strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0,
        };

        let shuffledResult = shuffleArray(defaultAttributeScores);
        for (const [key, value] of Object.entries(this.attributes)){
            let attributeValue = shuffledResult.pop();
            this.attributes[key] = attributeValue;
        }
    }


    rollAttr(){
        for(const key in this.attributes){
            let results= diceRoller(4,6);
            results.sort(function(a,b){return a-b}); //numeric sort w/ comp fucntion
            results.shift(); // remove lowest die roll
            let sum = sumArrayElems(results);
            this.attributes[key] = sum;
        }



    }
    printPlayer() {
        console.log(`NAME: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0, 3).toUpperCase()}: ${value}`);
        }
    }
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Son Goku');
player02.rollAttr();
player02.printPlayer();

