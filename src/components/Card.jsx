import React from 'react';
import PropTypes from 'prop-types';
import trunfo from '../trunfo2.png';

class Card extends React.Component {
  triunfo = (card) => ((card === true)
    ? (
      <span className="trunCard" data-testid="trunfo-card">
        <img className="imgTrun" src={ trunfo } alt="trunfo" />
      </span>
    ) : null);

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="Card">
        <div className="subCard">
          <img
            className="imgCard"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <div className="subClasName">
            <h2 className="nomeCard" data-testid="name-card">{cardName}</h2>
          </div>
          <div className="descricaoCard">
            <h3
              className="textAtt"
              data-testid="attr1-card"
            >
              {`Força . . . . . . . . . . . . . . . . . ${cardAttr1}`}
            </h3>
            <h3
              data-testid="attr2-card"
              className="textAtt"
            >
              {`Poder . . . . . . . . . . . . . . . . .${cardAttr2}`}
            </h3>
            <h3
              data-testid="attr3-card"
              className="textAtt"
            >
              {`Agilidade . . . . . . . . . . . . . .${cardAttr3} `}
            </h3>
          </div>
        </div>
        <span className="raroCard" data-testid="rare-card">{ cardRare }</span>
        <p className="pCard" data-testid="description-card">{ cardDescription }</p>
        { this.triunfo(cardTrunfo) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
