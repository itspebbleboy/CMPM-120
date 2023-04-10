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
        console.log ('rolling dice ...');
    }
    printPlayer(){
        console.log(this.name);
        console.log(this.attributes);
    }
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Son Goku');
player02.rollAttr();
player02.printPlayer();

