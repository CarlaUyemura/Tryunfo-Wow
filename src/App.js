import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import './App.css';
import sylvanas from './img/sylvans.jpg';
import varian from './img/varian.jpg';
import arthas from './img/arthas.jpg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [],
      searchName: '',
      type: 'todas',
      trunfoFilter: false,
    };
  }

  componentDidMount() {
    this.cardsFixo();
  }

  cardsFixo = () => {
    const descricaoSyl = `Sua alma 
    foi separada de seu corpo e forçada a lutar pelo Flagelo de Arthas como uma banshee.`;
    const descricaoVar = `Varian Wrynn é filho do falecido rei Llane,
     no pacífico Reino de Stormwind,
      e teve uma juventude feliz e próspera como o Príncipe de Stormwind.`;
    const descricaoArt = `Lich King foi Arthas Menethil,
     filho do rei de Lordaeron. 
     Sua obsessão em salvar seu povo acabou por corrompe-lo,
      se tornando um Death Knight. `;
    const muitoRaro = 'muito raro';
    this.setState({
      newCard: [{
        cardAttr1: '50',
        cardAttr2: '90',
        cardAttr3: '60',
        cardDescription: descricaoSyl,
        cardImage: sylvanas,
        cardName: 'Sylvana Correventos',
        cardRare: muitoRaro,
        cardTrunfo: false,
        hasTrunfo: false,
      },
      {
        cardAttr1: '90',
        cardAttr2: '70',
        cardAttr3: '20',
        cardDescription: descricaoVar,
        cardImage: varian,
        cardName: 'Rei Varian Wrynn',
        cardRare: muitoRaro,
        cardTrunfo: false,
        hasTrunfo: false,
      },
      {
        cardAttr1: '70',
        cardAttr2: '70',
        cardAttr3: '70',
        cardDescription: descricaoArt,
        cardImage: arthas,
        cardName: 'Lich King',
        cardRare: muitoRaro,
        cardTrunfo: false,
        hasTrunfo: false,
      }],
    });
  }

  verificaInputText = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxNumber = 210;
    const maxItem = 90;
    let text = false;
    let result = false;
    let sum = false;

    if (cardName.length
       && cardDescription.length
       && cardImage.length
       && cardRare.length) {
      text = true;
    }
    if (Number(cardAttr1) <= maxItem
      && Number(cardAttr2) <= maxItem
      && Number(cardAttr3) <= maxItem
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0) {
      result = true;
    }
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxNumber) {
      sum = true;
    }
    if (text && result && sum) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.verificaInputText());
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const card = this.state;
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((previous) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [...previous.newCard, card],
    }));
  };

  removeCard = (item) => {
    const { newCard } = this.state;
    if (item.cardTrunfo) this.setState({ hasTrunfo: false });
    this.setState({ newCard: newCard.filter((card) => (item.cardName !== card.cardName)),
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      newCard,
      isSaveButtonDisabled,
      searchName,
      type,
      trunfoFilter,
    } = this.state;
    return (
      <div className="container">
        <section className="container-forms">
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
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </section>
        <aside className="container-card">
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
        </aside>
        <section className="container-cards">
          <Filter
            onInputChange={ this.onInputChange }
            searchName={ searchName }
            cardRare={ cardRare }
            type={ type }
            trunfoFilter={ trunfoFilter }
          />
          <div className="cards-save">
            {
              newCard
                .filter((card) => card.cardName.includes(searchName))
                .filter((card) => (trunfoFilter ? card.cardTrunfo === true : newCard))
                .filter((card) => (type !== 'todas' ? type === card.cardRare : newCard))
                .map((card, index) => (
                  <section className="container-card" key={ index }>
                    <Card
                      cardName={ card.cardName }
                      cardDescription={ card.cardDescription }
                      cardAttr1={ card.cardAttr1 }
                      cardAttr2={ card.cardAttr2 }
                      cardAttr3={ card.cardAttr3 }
                      cardImage={ card.cardImage }
                      cardRare={ card.cardRare }
                      cardTrunfo={ card.cardTrunfo }
                      key={ card.cardName }
                    />
                    <button
                      className="button-remove"
                      data-testid="delete-button"
                      type="button"
                      onClick={ () => this.removeCard(card) }
                    >
                      Excluir
                    </button>
                  </section>
                ))
            }
          </div>
        </section>
      </div>
    );
  }
}
