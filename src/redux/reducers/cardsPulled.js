const cardsReducer = (state = 1, action) => {
    switch (action.type){
        case 'PULL':
            return action.payload;
        default:
            return state; 
    }
}

export default cardsReducer;