import React from 'react';

class Preference extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFull: true,
            numberOfCards: 22
        }
        this.changeFull = this.changeFull.bind(this);
        this.changeNumCards = this.changeNumCards.bind(this);
    }

    changeFull(){
        
    }
}

export default Preference;