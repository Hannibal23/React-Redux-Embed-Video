function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }];
            break;
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if(typeof action.video !== 'undefined') {
        return {
            ...state,
            [action.video]: postComments(state[action.postId], action)
        }
    }else {
        return {
            ...state,
            [action.video]: postComments(state[action.video], action)
        }
    }
    return state;
}

export default comments;
