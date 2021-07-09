/*gets information/requests from the controller
applies all business logic and based on that
returns certain data from the store
*/

import Post from "../Models/Post.js"
import Store from "../store.js"
import items from "../items.js"

class PostService {
  delete(id) {
    let postIndex = Store.State.posts.findIndex(post => post.id == id)
    Store.State.posts.splice(postIndex, 1)
  }
  createPost(rawData) {
    console.log("creating post from service")
    let newPost = new Post(items.ToSell[rawData])
    //directly manipulates the Store. Won't do this in the future
    //Store.State.posts.push(post)

    //you'll end up with an array of all the current store posts as well as the new one
    let posts = [...Store.State.allItems, newPost]
    Store.commit('allItems', posts)
    console.log("all", Store.State)
  }

}
const service = new PostService()
export default service