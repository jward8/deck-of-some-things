import React from 'react';
import Logo from './Logo';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            deckSize: 22,
            fullDeck: true,
            cardsToPull: 0
        }
    }

    render(){
        return(
            <div className='home_row'>
                <Logo></Logo>
                <div className='home_options'>
                    <h1 className='home_title'>What Deck?</h1>
                    <form>
                        <label className='full-deck'>
                            <span className='full-deck-input'>
                                <input type='radio' name='full'/>
                                <span className='full-control'></span>
                            </span>
                            <span className='full-label'>Full</span>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;