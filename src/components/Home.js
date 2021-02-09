import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from './Logo';

export default function Home(){
    const defaultValue = {
        fullDeck: true
    }
    const { handleSubmit, deckForm } = useForm({defaultValue});
    const onSubmit = (data) => console.log(data); 

    return(
        <div className='home_row'>
        <Logo></Logo>
        <div className='home_options'>
            <h1 className='home_title'>What Deck?</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='deck-option'>Full
                    <span className='full_control'>
                        <input 
                            name="fullDeck"
                            type="radio" 
                            value={true}
                            ref={deckForm}
                            defaultChecked/>
                        <span className='checkmark'></span>
                    </span>
                </label>
                <label className='deck-option'> Option
                    <span className='full_control'>
                        <input 
                            name="fullDeck"
                            type="radio" 
                            value={false}
                            ref={deckForm}/>
                        <span className='checkmark'></span>
                    </span>
                </label>
                <input type="submit"/>
            </form>
            {/* <form>
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
            </form> */}
        </div>
    </div> 
    );
}

// class Home extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             deckSize: 22,
//             fullDeck: true,
//             cardsToPull: 0
//         }

//         this.deckInput = this.deckInput.bind(this);
//     }

//     deckInput(deckNum){
//         this.setState({deckSize: deckNum});
//         if(deckNum !== 22){
//             //FIXME
//         }
//     }

//     render(){
//         return(
//             <div className='home_row'>
//                 <Logo></Logo>
//                 <div className='home_options'>
//                     <h1 className='home_title'>What Deck?</h1>
//                     <form>
//                         <label className='deck-option'>Full
//                             <span className='full_control'>
//                                 <input type='radio' checked='checked' name='radio'/>
//                                 <span className='checkmark'></span>
//                             </span>
//                         </label>
//                         <label className='deck-option'>
//                             <span className='full_control'>
//                                 <input type='radio' name='radio'>
//                                     <input type='text' onChange={this.deckInput}/>
//                                 </input>
//                                 <span className='checkmark'></span>
//                             </span>
//                         </label>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Home;