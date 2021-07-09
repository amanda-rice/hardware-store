export default class Post {
  constructor(obj) {
    this.name = obj.name
    this.price = obj.price
    this.quantity = 1
    this.id = generateID()
  }
  //can treat template as if it's a property of Post
  get Template() {
    let template = ''
    template += `
    <div class="col-3 shadow-sm p-3 my-5 bg-body rounded">
      <h1>${this.name}</h1>
      <p>${this.price}</p>
      <p>${this.quantity}</p>
      <button onclick="" id="${this.id}-button">Remove</button>
    </div>
    `
    return template
  }
}
function generateID() {
  return Math.floor(Math.random() * 10000)
}