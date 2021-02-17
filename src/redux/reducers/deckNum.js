const deckReducer = (state = 22, action) => {
    switch(action.type) {
        case 'UPDATE':
            return action.payload;
        default:
            return 22;
    }
}

export default deckReducer;