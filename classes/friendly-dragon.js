// Your code here
const Dragon = require('./dragon');

class FriendlyDragon extends Dragon{

    constructor(name,colour,lifeGoal,friend){
        super(name,colour);
        this.lifeGoal = lifeGoal;
        this.friend = friend;
    }

    hasLifeGoals(){
        return `${this.name} likes to ${this.lifeGoal}`
    }

    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}.`;
    }
}


module.exports = FriendlyDragon;
