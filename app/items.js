let _toSell = {
  chainsaw: {
    name: 'Chainsaw',
    price: 170,
    stocked: 15,
    img: 'assets/chainsaw.jpeg'
  },
  drill: {
    name: 'Drill',
    price: 75,
    stocked: 7,
    img: 'assets/drill.jpeg'
  },
  hammer: {
    name: 'Hammer',
    price: 3.99,
    stocked: 43,
    img: 'assets/hammer.jpeg'
  },
  sander: {
    name: 'Sander',
    price: 44.99,
    stocked: 22,
    img: 'assets/sander.jpeg'
  },
  screws: {
    name: 'Screws',
    price: 4.99,
    stocked: 15,
    img: 'assets/screws.jpeg'
  },
  tablesaw: {
    name: 'Table Saw',
    price: 200,
    stocked: 12,
    img: 'assets/tablesaw.jpeg'
  },
  toolbox: {
    name: 'Toolbox',
    price: 150,
    stocked: 5,
    img: 'assets/toolbox.jpeg'
  },
  wrench: {
    name: 'Wrench',
    price: 6.50,
    stocked: 50,
    img: 'assets/wrench.jpeg'
  }
}
class Items {
  get ToSell() {
    return _toSell
  }
  commit(prop, data) {
    _toSell[prop] = data
  }
}
const items = new Items()
export default items