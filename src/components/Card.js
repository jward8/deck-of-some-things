import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.fullDeck = this.fullDeck.bind(this);
    }

    fullDeck(){
        var rows = [];
        var row = [];
        for(var i = 1; i <= 22; i++){
            row.push(
                <div key={i} class="card-body"></div>
            );
            if(i  % 5 === 0){
                rows.push(row);
                row = [];
            }
        }

        return rows;
    }

    render() {
        return(
            <div class="card-container">{this.fullDeck()}</div>
        );
    }
}

export default Card;