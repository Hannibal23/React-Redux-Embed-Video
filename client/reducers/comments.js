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

export default postComments;
