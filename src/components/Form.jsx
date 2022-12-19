import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    return (
      <div>
        <h2 className="text">ADICIONE UMA NOVA CARTA</h2>
        <form className="forms">
          <label htmlFor="nome" className="nome1 Labels">
            Nome da Carta:
            <br />
            <input
              className="nome"
              data-testid="name-input"
              type="text"
              id="nome"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descricao" className="Labels">
            Descrição da Carta:
            <br />
            <textarea
              className="descricao"
              data-testid="description-input"
              id="descricao"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label className="Labels" htmlFor="att1">
            Força
            <input
              className="attr"
              data-testid="attr1-input"
              id="att1"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="att2" className="Labels">
            Poder
            <input
              className="attr"
              data-testid="attr2-input"
              type="number"
              id="att2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="att3" className="Labels">
            Agilidade
            <input
              className="attr1"
              data-testid="attr3-input"
              type="number"
              id="att3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="img" className="Labels">
            Image
            <input
              className="imagem"
              data-testid="image-input"
              type="img"
              id="img"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare" className="Labels">
            Raridade
            <select
              className="selecao"
              data-testid="rare-input"
              id="rare"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option className="Labels">Normal</option>
              <option className="Labels">Raro</option>
              <option className="Labels">Muito Raro</option>
            </select>
          </label>
          <p className="Labels">{`Total de pontos = ${total}`}</p>
          {
            hasTrunfo === true
              ? (
                <span className="Trunfo Labels">
                  Você já tem um Super Trunfo em seu baralho
                </span>
              )
              : (
                <label htmlFor="trunfo" className="Labels">
                  <input
                    className="superTrunfo"
                    data-testid="trunfo-input"
                    type="checkbox"
                    checked={ cardTrunfo }
                    id="trunfo"
                    name="cardTrunfo"
                    onChange={ onInputChange }
                  />
                  Super Trunfo
                </label>
              )
          }
          <button
            className="botapSalvar"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
