import deckReducer from './deckNum';
import fullReducer from './isFull';
import cardsReducer from './cardsPulled';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    deck_size: deckReducer,
    isFull: fullReducer,
    pulled_cards: cardsReducer
});

export default allReducers;