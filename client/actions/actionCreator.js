// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(video, author, comment) {
  return {
    type: 'ADD_COMMENT',
    video,
    author,
    comment
  }
}

export function addLink(video, link) {
    return {
        type: 'GET_LINK',
        video,
        link
    }
}
