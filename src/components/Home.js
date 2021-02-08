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

        this.deckInput = this.deckInput.bind(this);
    }

    deckInput(deckNum){
        this.setState({deckSize: deckNum});
        if(deckNum !== 22){
            //FIXME
        }
    }

    render(){
        return(
            <div className='home_row'>
                <Logo></Logo>
                <div className='home_options'>
                    <h1 className='home_title'>What Deck?</h1>
                    <form>
                        <label className='deck-option'>Full
                            <span className='full_control'>
                                <input type='radio' checked='checked' name='radio'/>
                                <span className='checkmark'></span>
                            </span>
                        </label>
                        <label className='deck-option'>
                            <span className='full_control'>
                                <input type='radio' name='radio'>
                                    <input type='text' onChange={this.deckInput}/>
                                </input>
                                <span className='checkmark'></span>
                            </span>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;