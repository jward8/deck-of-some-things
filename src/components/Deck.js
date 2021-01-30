import React from 'react';
import Card from './Card';

var cardTypes = ["Vizier", "Sun", "Moon", "Star", "Comet",
"The Fates", "Throne", "Key", "Knight", "Gem", "Talons",
"The Void", "Flames", "Skull", "Idiot", "Donjon", "Ruin",
"Euryale", "Rogue", "Balance", "Fool", "Jester"];

class Deck extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfCards: 22
        }
        this.cardsInDeck = this.cardsInDeck.bind(this);
        this.generateDeck = this.generateDeck.bind(this);
    }

    cardsInDeck(numCards){
        this.setState({numberOfCards: numCards});
    }

    getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateDeck(){
        var deck = [];
        var row = [];
        let cards = JSON.parse(JSON.stringify(cardTypes));
        for(var i = 1; i <= this.state.numberOfCards; i++){
            let num = this.getRandomInt(cards.length);
            let card = cards[num];
            cards.splice(num, 1);
            row.push(
                <Card key={card} cardType={card}></Card>
            );
        }

        deck.push(row);

        return deck;
    }

    render(){
        return(
            <div className="card-container">{this.generateDeck()}</div>
        );
    }
}

export default Deck;