import React from 'react';

class Logo extends React.Component{

    render(){
        return(
            <div className='logo_container'>
                <div className='card_row'>
                    <div className='box_one'/>
                    <div className='box_two'/>
                    <div className='box_three'/>
                </div>
                <div className='logo_box'>
                    <h1 className='logo_font'>The Deck<br/> of<br/> Some<br/> Things</h1>
                </div>
            </div>
        );
    }
}

export default Logo;