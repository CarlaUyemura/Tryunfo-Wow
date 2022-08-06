import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  verificaColorRaridade = () => {
    const { cardRare } = this.props;
    if (cardRare === 'normal') {
      return <h2 data-testid="rare-card" className="raridade-card normal">{cardRare}</h2>;
    }
    if (cardRare === 'raro') {
      return <h2 data-testid="rare-card" className="raridade-card raro">{cardRare}</h2>;
    }
    return (
      <h2
        data-testid="rare-card"
        className="raridade-card muito-raro"
      >
        {cardRare}
      </h2>);
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
    } = this.props;
    return (
      <section className="card">
        <div className="container-name">
          <h2 data-testid="name-card" className="name-card">{cardName}</h2>
        </div>
        <div className="img-card">
          {cardImage
            ? <img data-testid="image-card" src={ cardImage } alt="Personagem" /> : ''}
        </div>
        <div className="container-rare-trunfo">
          {this.verificaColorRaridade()}
          {cardTrunfo === true
            ? (
              <h2
                data-testid="trunfo-card"
                className="super-trunfo"
              >
                Super Trunfo

              </h2>
            ) : ''}
        </div>
        <div className="container-descricao">
          <p
            data-testid="description-card"
            className="descricao-card"
          >
            {cardDescription}

          </p>
        </div>
        <div className="container-atributos">
          <p data-testid="attr1-card" className="forca">{cardAttr1}</p>
          <p data-testid="attr2-card" className="velocidade">{cardAttr2}</p>
          <p data-testid="attr3-card" className="magia">{cardAttr3}</p>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
