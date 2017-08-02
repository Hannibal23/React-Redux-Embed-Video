function embed(state=[], action) {
    switch (action.type) {
        case 'GET_LINK':
        console.log(action.video);

        return {
            ...state,
            id: action.video,
            link: action.link
        }
        default:
        return state;
    }
}


export default embed;
