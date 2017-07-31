function embedLink(state=[], action) {
    switch (action.type) {
        case 'GET_LINK':
        console.log(action.video);

        return [

           {
             video: action.video
         },
            ...state
         ]
        default:
        return state;
    }
}


export default embedLink;
