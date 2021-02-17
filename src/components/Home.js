import React, { useState } from 'react';
import { Link } from  'react-router-dom'
import Logo from './Logo';
import { useDispatch} from 'react-redux';
import { pullCards, DeckUpdate, isFull, isUsed } from '../redux/actions';

export default function Home(){
    const dispatch = useDispatch();
    const [deckSize, changeSize] = useState();
    const [full, changeFull] = useState(true);
    const [pull, changePull] = useState(1);

    const handleSubmit = () => {
        //do nothing
    }

    return(
        <div className='home_row'>
        <Logo></Logo>
        <div className='home_options'>
            <h1 className='home_title'>What Deck?</h1>
            <form onSubmit={handleSubmit}>
                <label className='deck-option'>Full
                    <span className='full_control'>
                        <input 
                            name="fullDeck"
                            type="radio" 
                            value={true}
                            onChange={changeFull}
                            defaultChecked/>
                        <span className='checkmark'></span>
                    </span>
                </label>
                <label className='deck-option'> <span id="disabled">Option</span>
                    <span className='full_control'>
                        <input 
                            name="fullDeck"
                            type="radio" 
                            value={false}
                            onChange={changeFull}
                            disabled/>
                        <span className='checkmark'></span>
                    </span>
                </label>
                <input 
                    type="text" 
                    placeholder="How many are you pulling?" 
                    name="pullNum" 
                    ref={changePull} />
                <br/>
                <Link to={{
                    pathname: '/pull'
                    }}>
                    <input type="submit" onClick={() => {
                        dispatch(pullCards(pull.value));
                        if(full){
                            dispatch(isFull());
                        }else{
                            dispatch(isUsed());
                        }
                    }}/>
                </Link>
            </form>
            
        </div>
    </div> 
    );
}