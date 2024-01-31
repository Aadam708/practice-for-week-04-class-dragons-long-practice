// Your code here

class Dragon {

  constructor(name,colour){
    this.name = name;
    this.colour = colour;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...drags){
    // let drags = [...drags];
    let dragNames =[];
    drags.forEach(drag =>{
      dragNames.push(drag.name);
    })

    return dragNames;
  }

}

const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
