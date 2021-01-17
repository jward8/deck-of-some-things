import React from 'react';

var cardTypes = ["Vizier", "Sun", "Moon", "Star", "Comet",
"The Fates", "Throne", "Key", "Knight", "Gem", "Talons",
"The Void", "Flames", "Skull", "Idiot", "Donjon", "Ruin",
"Euryale", "Rogue", "Balance", "Fool", "Jester"];

class Card extends React.Component {
    constructor(props){
        super(props);
        this.fullDeck = this.fullDeck.bind(this);
    }

    getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    fullDeck(){
        var rows = [];
        var row = [];
        let cards = JSON.parse(JSON.stringify(cardTypes));
        for(var i = 1; i <= 22; i++){
            let num = this.getRandomInt(cards.length);
            let card = cards[num];
            cards.splice(num, 1);
            row.push(
                <div className="card">
                    <div className="card-back">
                        <div key={i} className="card-body"></div>
                    </div>
                    <div className="card-front">
                        <div key={card} className="card-type">
                            <h2 className="card-type-text">{card}</h2>
                        </div>
                    </div>
                </div>
            );
        }

        rows.push(row);

        return rows;
    }

    render() {
        return(
            <div className="card-container">{this.fullDeck()}</div>
        );
    }
}

export default Card;