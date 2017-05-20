function removeVideos () {
  let posts = document.getElementsByClassName('_5jmm')

  let post, sharedIndex, videoIndex
  for (let i = 0; i < posts.length; i++) {
    post = posts[i]
    sharedIndex = post.textContent.indexOf(' shared ')
    videoIndex = post.textContent.indexOf('video')

    if (sharedIndex > -1 && videoIndex > sharedIndex) {
      post.parentElement.remove(post)
    }
  }
}

setInterval(() => {
  removeVideos()
}, 1000)

removeVideos()
