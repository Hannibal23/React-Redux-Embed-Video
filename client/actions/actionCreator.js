// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(author, comment) {
  return {
    type: 'ADD_COMMENT',
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
