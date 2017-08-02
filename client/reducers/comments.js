function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {...state, comment: action.author}
            break;
        default:
            return state;
    }
    return state;
}

export default postComments;
