/*gets information/requests from the controller
applies all business logic and based on that
returns certain data from the store
*/

import Post from "../Models/Post.js"
import Store from "../store.js"
import items from "../items.js"

class PostService {
  deletePost(id) {
    let existingIndex
    let existingItem = Store.State.allItems.find((e, i) => {
      if (e.id == id) {
        existingIndex = i;
        return e;
      }
    })
    existingItem.quantity--
    console.log("ex quantity", existingItem.quantity)
    if (existingItem.quantity < 1) {
      let postIndex = Store.State.allItems.findIndex(post => post.id == id)
      Store.State.allItems.splice(postIndex, 1)
    }

  }
  createPost(rawData) {
    console.log("creating post from service")
    let currentItem = items.ToSell[rawData]
    let existingIndex
    let existingItem = Store.State.allItems.find((e, i) => {
      if (e.name == currentItem.name) {
        existingIndex = i;
        return e;
      }
    })
    console.log("existing", existingIndex)
    if (!existingItem) {
      let newPost = new Post(currentItem)
      //directly manipulates the Store. Won't do this in the future
      //Store.State.posts.push(post)
      //you'll end up with an array of all the current store posts as well as the new one
      let posts = [...Store.State.allItems, newPost]
      Store.commit('allItems', posts)
      console.log("all", Store.State)
    }
    else {
      existingItem.quantity++
      console.log("ex quantity", existingItem.quantity)
    }
  }

}
const service = new PostService()
export default service