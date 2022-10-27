import React from 'react';
import PropTypes from 'prop-types';
// hasTrunfo ,
class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <form>
          <h2>ADICIONE UMA NOVA CARTA</h2>
          <label htmlFor="nome">
            Nome
            <br />
            <input
              data-testid="name-input"
              type="text"
              id="nome"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="descricao">
            Descrição
            <br />
            <textarea
              data-testid="description-input"
              id="descricao"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="att1">
            Attr01
            <input
              data-testid="attr1-input"
              id="att1"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="att2">
            Attr02
            <input
              data-testid="attr2-input"
              type="number"
              id="att2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="att3">
            Attr03
            <input
              data-testid="attr3-input"
              type="number"
              id="att3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="img">
            Image
            <input
              data-testid="image-input"
              type="img"
              id="img"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="rare">
            Raridade
            <br />
            <select
              data-testid="rare-input"
              value={ cardRare }
              id="rare"
              name="cardRare"
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="trunfo">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              id="trunfo"
              name="cardTrunfo"
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
          <button
            data-testid="save-button"
            type="button"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
