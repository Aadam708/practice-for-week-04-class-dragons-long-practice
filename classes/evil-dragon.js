// Your code here
const Dragon = require('./dragon');

class EvilDragon extends Dragon{

    constructor(name,colour, evilDoings, nemesis){
        super(name,colour);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner(){
        this.evilDoings.forEach(evilDoing => {

            console.log(`${this.name} will ${evilDoing}`);
        });

    }

    burnsNemesis(){
        return`${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}



  module.exports = EvilDragon;
