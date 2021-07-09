export default class Post {
  constructor(obj) {
    this.name = obj.name
    this.price = obj.price.toFixed(2)
    this.quantity = 1
    this.img = obj.img
    this.id = generateID()
  }
  //can treat template as if it's a property of Post
  get Template() {
    let template = ''
    template += `
    <div class="col-12 shadow-sm bg-body rounded p-3">
      <div class="row d-flex justify-content-between">
        <img src="${this.img}" alt="${this.name}" class="col-2 w-100">
        <h3 class="col-2">${this.name}</h3>
        <p class="col-2">$${this.price}</p>
        <p class="col-2">${this.quantity}</p>
        <p class="col-2">${this.quantity * this.price}</p>
        <div class="col-1">
          <button onclick="app.postController.deletePost('${this.id}')" id="${this.id}-button">Remove</button>
        </div>
      </div>
    </div>
    `
    return template
  }
}
function generateID() {
  return Math.floor(Math.random() * 10000)
}