import React from 'react';
import k from './horadeAventura.png';
import './style.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardDescription: '',
    cardRare: '',
    cardTrunfo: '',
    isSaveButtonDisabled: '',
    NovoCard: [],
    hasTrunfo: '',
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        isSaveButtonDisabled: this.ValidarBtn(),
      });
    });
  };

  ValidarBtn = () => {
    const { cardName, cardDescription, cardRare,
      cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const inputString = cardName.length > 0 && cardDescription.length > 0
     && cardRare !== undefined && cardImage.length > 0;
    const maxSum = 210;
    const maxAtt = 90;
    const minAtt = 0;
    const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum;
    const attMax = cardAttr1 <= maxAtt && cardAttr2 <= maxAtt && cardAttr3 <= maxAtt;
    const attMin = cardAttr1 >= minAtt && cardAttr2 >= minAtt && cardAttr3 >= minAtt;
    const boolBtn = inputString && attMax && attMin && soma;
    return boolBtn;
  };

  SalvarBtn = () => {
    this.setState(({ cardName,
      cardDescription,
      cardRare,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
      NovoCard }) => ({
      NovoCard: [...NovoCard, {
        cardName,
        cardDescription,
        cardRare,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardTrunfo,
        hasTrunfo,
      }],
      cardName: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardDescription: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: cardTrunfo && !hasTrunfo,
      isSaveButtonDisabled: '',
    }));
  };

  ExcluirCard = (index, cardTrunfo) => {
    const { NovoCard } = this.state;
    const remove = NovoCard;
    remove.splice(index, 1);
    this.setState({
      NovoCard: remove,
      hasTrunfo: !cardTrunfo,
    });
  };

  ListaDeCard = () => {
    const { NovoCard } = this.state;
    const Cards = (NovoCard.map((e, index) => (
      <li className="listaCard" key={ index }>
        <Card { ...e } />
        <button
          type="button"
          className="btnExcluir"
          data-testid="delete-button"
          onClick={ () => this.ExcluirCard(index, e.cardTrunfo) }
        >
          Excluir
        </button>
      </li>
    )));
    return Cards;
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo } = this.state;
    return (
      <div className="pai">
        <img className="image" src={ k } alt="Aventura" />
        <div className="FormECard">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ !isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.SalvarBtn }
          />
          <div>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <div className="CardsSalvos">{this.ListaDeCard()}</div>
      </div>
    );
  }
}

export default App;
