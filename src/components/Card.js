import React from 'react';

class Card extends React.Component {

    render() {
        return(
            <div className="card">
                <div className="card-back">
                    <div className="card-body"></div>
                </div>
                <div key={this.props.cardType} className="card-front">
                    <div className="card-type">
                        <h2 className="card-type-text">{this.props.cardType}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;