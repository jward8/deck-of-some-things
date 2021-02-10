import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import Logo from './Logo';

export default function Home(){
    const defaultValue = {
        fullDeck: true,
        numPull: 1
    }

    const { register, handleSubmit } = useForm({defaultValue});
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
                            ref={register({required: true})}
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
                            ref={register}
                            disabled/>
                        <span className='checkmark'></span>
                    </span>
                </label>
                <input 
                    type="text" 
                    placeholder="How many are you pulling?" 
                    name="pullNum" 
                    ref={register({required:true, max: 22, min: 1, pattern: /^[0-9]*$/i})} />
                <br/>
                {/* <Link to={{
                    pathname: '/pull',
                    state: {
                        fullDeck: onSubmit.fullDeck,
                        pullNum: onSubmit.pullNum
                    }
                    }}> */}
                    <input type="submit"/>
                {/* </Link> */}
            </form>
            
        </div>
    </div> 
    );
}