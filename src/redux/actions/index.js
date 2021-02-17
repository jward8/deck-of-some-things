export const pullCards = (num) => {
    return{
        type: 'PULL',
        payload: num
    };
};

export const DeckUpdate = (deck_num) => {
    return{
        type: 'UPDATE',
        payload: deck_num
    };
};

export const isUsed = () => {
    return{
        type: 'USED'
    };
};

export const isFull = () => {
    return {
        type: 'FULL'
    };
};