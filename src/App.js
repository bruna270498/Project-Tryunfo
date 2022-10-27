import React from 'react';
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
      }],
      cardName: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardDescription: '',
      cardRare: '',
      cardTrunfo: '',
    }));
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.SalvarBtn }
        />
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
    );
  }
}

export default App;
