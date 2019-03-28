class Airport {

  constructor(){
    this.hangar = [];
  }

  returnHangar(){
    return this.hangar;
  };

  clearForLanding(plane) {
    this.hangar.push(plane);
  };

  clearForTakeOff(plane) {
    this.hangar.splice( this.hangar.indexOf(plane), 1 );;
  };
}

const airport = new Airport()
module.exports = airport
