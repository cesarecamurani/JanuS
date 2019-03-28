class CruiseTicket {
  constructor() {
    this.destinations = [
                        {name: 'san francisco', price: 2500},
                        {name: 'delhi', price: 1500 }
                        ]
  }
  returnTicket(destination) {
    for(let i = 0; i < this.destinations.length; i++) {
      if(this.destinations[i]['name'] === destination) {
        return "The price of your journey to " + this.destinations[i]['name'] + " is £" + this.destinations[i]['price']
      }
    }
  }
}
const ticket = new CruiseTicket();
module.exports =  ticket
