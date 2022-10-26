import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Nome
            <br />
            <input data-testid="name-input" type="text" />
          </label>
          <br />
          <label> 
            Descrição
            <br />
            <textarea data-testid="description-input" />
          </label>
          <br />
          <label>
            Attr01
            <input data-testid="attr1-input" type="number" />
          </label>
          <br />
          <label>
            Attr02
            <input data-testid="attr2-input" type="number" />
          </label>
          <br />
          <label>
            Attr03
            <input data-testid="attr3-input" type="number" />
          </label>
          <br />
          <label>
            Image
            <input data-testid="image-input" type="img" />
          </label>
          <br />
          <label>
            Raridade
            <br />
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          <label>
            <input data-testid="trunfo-input" type="checkbox" />
            Super Trunfo
          </label>
          <button data-testid="save-button" type="button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
