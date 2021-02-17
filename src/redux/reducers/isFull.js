const fullReducer = (state = true, action) => {
    switch (action.type) {
        case 'USED':
            return false;
        default:
            return true;
    }
}

export default fullReducer;