
import PostService from "../Services/PostService.js"
import items from "/app/items.js"
import store from "../store.js"
//any interaction on the DOM should always go to a controller first. Not a service.

function _drawShop() {
  let inventory = items.ToSell
  console.log("inventory", inventory)
  let templates = ``
  for (const key in inventory) {
    let item = inventory[key]
    console.log("item", item)
    templates += `
    <div class="col-3 shadow-sm p-3 my-5 bg-body rounded">
      <h1>${item.name}</h1>
      <img class="shop-img w-100" src="${item.img}" alt="${item.name}">
      <p>${item.price}</p>
      <button onclick="app.postController.createPost('${key}')">Add to Cart</button>
    </div>
    `
  }
  document.getElementById('shop-items').innerHTML = templates
}

function _draw() {
  let posts = store.State.allItems
  let templates = ``
  posts.forEach(item => {
    templates += item.Template
  })
  document.getElementById('cart').innerHTML = templates
}
_drawShop()
_draw()
export default class PostController {
  constructor() {
    console.log("building controller")
    _draw()
  }
  createPost(item) {
    console.log("creating post", item)
    PostService.createPost(item)
    _draw()
  }

}