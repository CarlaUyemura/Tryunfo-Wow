"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Form.js



class Form extends (external_react_default()).Component {
    render() {
        const { cardName , cardDescription , onInputChange , cardAttr1 , cardAttr2 , cardAttr3 , cardImage , cardRare , cardTrunfo , isSaveButtonDisabled , hasTrunfo , onSaveButtonClick ,  } = this.props;
        return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("form", {
            children: [
                "Nome da carta",
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                    htmlFor: "name-card",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                        "data-testid": "name-input",
                        type: "text",
                        id: "name-card",
                        name: "cardName",
                        value: cardName,
                        onChange: onInputChange
                    })
                }),
                "Descri\xe7\xe3o",
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                    htmlFor: "description",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("textarea", {
                        "data-testid": "description-input",
                        type: "text",
                        id: "description",
                        name: "cardDescription",
                        value: cardDescription,
                        onChange: onInputChange
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "container-numbers",
                    children: [
                        "For\xe7a",
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                            htmlFor: "attr1",
                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                                className: "numbers",
                                "data-testid": "attr1-input",
                                type: "number",
                                id: "attr1",
                                name: "cardAttr1",
                                value: cardAttr1,
                                onChange: onInputChange
                            })
                        }),
                        "Velocidade",
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                            htmlFor: "attr2",
                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                                className: "numbers",
                                "data-testid": "attr2-input",
                                type: "number",
                                id: "attr2",
                                name: "cardAttr2",
                                value: cardAttr2,
                                onChange: onInputChange
                            })
                        }),
                        "Magia",
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                            htmlFor: "attr3",
                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                                className: "numbers",
                                "data-testid": "attr3-input",
                                type: "number",
                                id: "attr3",
                                name: "cardAttr3",
                                value: cardAttr3,
                                onChange: onInputChange
                            })
                        })
                    ]
                }),
                "Imagem",
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                    htmlFor: "image",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                        "data-testid": "image-input",
                        type: "text",
                        id: "image",
                        name: "cardImage",
                        value: cardImage,
                        onChange: onInputChange
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "container-rare",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            className: "container-select",
                            children: [
                                "Raridade",
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                                    htmlFor: "rare",
                                    children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("select", {
                                        className: "raridade",
                                        "data-testid": "rare-input",
                                        id: "rare",
                                        name: "cardRare",
                                        value: cardRare,
                                        onChange: onInputChange,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("option", {
                                                value: "normal",
                                                children: "Normal"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("option", {
                                                value: "raro",
                                                children: "Raro"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("option", {
                                                value: "muito raro",
                                                children: "Muito raro"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        !hasTrunfo ? /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("label", {
                            htmlFor: "trunfo",
                            children: [
                                "Carta Super Trunfo",
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                                    className: "trunfo",
                                    "data-testid": "trunfo-input",
                                    type: "checkbox",
                                    id: "trunfo",
                                    name: "cardTrunfo",
                                    checked: cardTrunfo,
                                    onChange: onInputChange
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h3", {
                            children: "Voc\xea j\xe1 tem um Super Trunfo em seu baralho!"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                    className: "button-save",
                    type: "submit",
                    "data-testid": "save-button",
                    disabled: isSaveButtonDisabled,
                    onClick: onSaveButtonClick,
                    children: "Salvar"
                })
            ]
        }));
    }
}
Form.propTypes = {
    cardAttr1: (external_prop_types_default()).string.isRequired,
    cardAttr2: (external_prop_types_default()).string.isRequired,
    cardAttr3: (external_prop_types_default()).string.isRequired,
    cardDescription: (external_prop_types_default()).string.isRequired,
    cardImage: (external_prop_types_default()).string.isRequired,
    cardName: (external_prop_types_default()).string.isRequired,
    cardRare: (external_prop_types_default()).string.isRequired,
    cardTrunfo: (external_prop_types_default()).bool.isRequired,
    hasTrunfo: (external_prop_types_default()).bool.isRequired,
    isSaveButtonDisabled: (external_prop_types_default()).bool.isRequired,
    onInputChange: (external_prop_types_default()).func.isRequired,
    onSaveButtonClick: (external_prop_types_default()).func.isRequired
};
/* harmony default export */ const components_Form = (Form);

;// CONCATENATED MODULE: ./src/components/Card.js



class Card extends (external_react_default()).Component {
    verificaColorRaridade = ()=>{
        const { cardRare  } = this.props;
        if (cardRare === 'normal') {
            return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                "data-testid": "rare-card",
                className: "raridade-card normal",
                children: cardRare
            }));
        }
        if (cardRare === 'raro') {
            return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                "data-testid": "rare-card",
                className: "raridade-card raro",
                children: cardRare
            }));
        }
        return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
            "data-testid": "rare-card",
            className: "raridade-card muito-raro",
            children: cardRare
        }));
    };
    render() {
        const { cardName , cardDescription , cardAttr1 , cardAttr2 , cardAttr3 , cardImage , cardTrunfo ,  } = this.props;
        return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
            className: "card",
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "container-name",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                        "data-testid": "name-card",
                        className: "name-card",
                        children: cardName
                    })
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "img-card",
                    children: cardImage ? /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                        "data-testid": "image-card",
                        src: cardImage,
                        alt: "Personagem"
                    }) : ''
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "container-rare-trunfo",
                    children: [
                        this.verificaColorRaridade(),
                        cardTrunfo === true ? /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                            "data-testid": "trunfo-card",
                            className: "super-trunfo",
                            children: "Super Trunfo"
                        }) : ''
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "container-descricao",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                        "data-testid": "description-card",
                        className: "descricao-card",
                        children: cardDescription
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "container-atributos",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                            "data-testid": "attr1-card",
                            className: "forca",
                            children: cardAttr1
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                            "data-testid": "attr2-card",
                            className: "velocidade",
                            children: cardAttr2
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                            "data-testid": "attr3-card",
                            className: "magia",
                            children: cardAttr3
                        })
                    ]
                })
            ]
        }));
    }
}
Card.propTypes = {
    cardAttr1: (external_prop_types_default()).string.isRequired,
    cardAttr2: (external_prop_types_default()).string.isRequired,
    cardAttr3: (external_prop_types_default()).string.isRequired,
    cardDescription: (external_prop_types_default()).string.isRequired,
    cardImage: (external_prop_types_default()).string.isRequired,
    cardName: (external_prop_types_default()).string.isRequired,
    cardRare: (external_prop_types_default()).string.isRequired,
    cardTrunfo: (external_prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_Card = (Card);

;// CONCATENATED MODULE: ./src/components/Filter.js



class Filter extends (external_react_default()).Component {
    render() {
        const { onInputChange , searchName , type , trunfoFilter  } = this.props;
        return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "container-filter",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("label", {
                    htmlFor: "search",
                    children: [
                        "Filtro de Busca",
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                            type: "text",
                            name: "searchName",
                            "data-testid": "name-filter",
                            onChange: onInputChange,
                            value: searchName,
                            disabled: trunfoFilter
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("label", {
                    htmlFor: "rare",
                    children: [
                        "Filtrar por Raridade",
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("select", {
                            "data-testid": "rare-filter",
                            id: "type",
                            name: "type",
                            value: type,
                            onChange: onInputChange,
                            disabled: trunfoFilter,
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("option", {
                                    value: "normal",
                                    children: "Normal"
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("option", {
                                    value: "raro",
                                    children: "Raro"
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("option", {
                                    value: "muito raro",
                                    children: "Muito raro"
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("option", {
                                    value: "todas",
                                    children: "Todas"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("label", {
                    htmlFor: "trunfoFilter",
                    children: [
                        "Super Trunfo",
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                            className: "trunfo",
                            "data-testid": "trunfo-filter",
                            type: "checkbox",
                            id: "trunfoFilter",
                            name: "trunfoFilter",
                            checked: trunfoFilter,
                            onChange: onInputChange
                        })
                    ]
                })
            ]
        }));
    }
}
Filter.propTypes = {
    onInputChange: (external_prop_types_default()).func.isRequired,
    searchName: (external_prop_types_default()).string.isRequired,
    type: (external_prop_types_default()).string.isRequired,
    trunfoFilter: (external_prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_Filter = (Filter);

;// CONCATENATED MODULE: ./src/img/sylvans.jpg
/* harmony default export */ const sylvans = ({"src":"/_next/static/media/sylvans.45505d0b.jpg","height":236,"width":325,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJkV/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIDBBEABSP/2gAIAQEAAT8Ap9xbjrTtE3kpOqx0653ef//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AEFb/9k="});
;// CONCATENATED MODULE: ./src/img/varian.jpg
/* harmony default export */ const varian = ({"src":"/_next/static/media/varian.31030f33.jpg","height":236,"width":325,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAgAFf/8QAHhAAAAQHAAAAAAAAAAAAAAAAAQMEIQACBSIxMmH/2gAIAQEAAT8ApomJzUwmvjQXum7H/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACAxIx/9oACAECAQE/AMptdXs//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAgBAwEBPwCclJH/2Q=="});
;// CONCATENATED MODULE: ./src/img/arthas.jpg
/* harmony default export */ const arthas = ({"src":"/_next/static/media/arthas.62209a70.jpg","height":236,"width":325,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAlhh//8QAHxAAAQMDBQAAAAAAAAAAAAAAAQIDEgAEBREhI2Jx/9oACAEBAAE/AH8wMVfucZWli7EuxSjSXsdq/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESUf/aAAgBAgEBPwCnp//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMiQf/aAAgBAwEBPwAx0Q15P//Z"});
;// CONCATENATED MODULE: ./src/pages/_app.js









class App extends (external_react_default()).Component {
    constructor(props){
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
            trunfoFilter: false
        };
    }
    componentDidMount() {
        this.cardsFixo();
    }
    cardsFixo = ()=>{
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
            newCard: [
                {
                    cardAttr1: '50',
                    cardAttr2: '90',
                    cardAttr3: '60',
                    cardDescription: descricaoSyl,
                    cardImage: sylvans,
                    cardName: 'Sylvana Correventos',
                    cardRare: muitoRaro,
                    cardTrunfo: false,
                    hasTrunfo: false
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
                    hasTrunfo: false
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
                    hasTrunfo: false
                }
            ]
        });
    };
    verificaInputText = ()=>{
        const { cardName , cardDescription , cardImage , cardRare , cardAttr1 , cardAttr2 , cardAttr3 ,  } = this.state;
        const maxNumber = 210;
        const maxItem = 90;
        let text = false;
        let result = false;
        let sum = false;
        if (cardName.length && cardDescription.length && cardImage.length && cardRare.length) {
            text = true;
        }
        if (Number(cardAttr1) <= maxItem && Number(cardAttr2) <= maxItem && Number(cardAttr3) <= maxItem && Number(cardAttr1) >= 0 && Number(cardAttr2) >= 0 && Number(cardAttr3) >= 0) {
            result = true;
        }
        if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxNumber) {
            sum = true;
        }
        if (text && result && sum) {
            this.setState({
                isSaveButtonDisabled: false
            });
        } else {
            this.setState({
                isSaveButtonDisabled: true
            });
        }
    };
    onInputChange = ({ target  })=>{
        const { name , type  } = target;
        const value = type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, ()=>this.verificaInputText()
        );
    };
    onSaveButtonClick = (event)=>{
        event.preventDefault();
        const card = this.state;
        if (card.cardTrunfo) {
            this.setState({
                hasTrunfo: true
            });
        }
        this.setState((previous)=>({
                cardName: '',
                cardDescription: '',
                cardAttr1: '0',
                cardAttr2: '0',
                cardAttr3: '0',
                cardImage: '',
                cardRare: 'normal',
                cardTrunfo: false,
                isSaveButtonDisabled: true,
                newCard: [
                    ...previous.newCard,
                    card
                ]
            })
        );
    };
    removeCard = (item)=>{
        const { newCard  } = this.state;
        if (item.cardTrunfo) this.setState({
            hasTrunfo: false
        });
        this.setState({
            newCard: newCard.filter((card)=>item.cardName !== card.cardName
            )
        });
    };
    render() {
        const { cardName , cardDescription , cardAttr1 , cardAttr2 , cardAttr3 , cardImage , cardRare , cardTrunfo , hasTrunfo , newCard , isSaveButtonDisabled , searchName , type , trunfoFilter ,  } = this.state;
        return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
                    className: "container-forms",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h1", {
                            children: "Tryunfo"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_Form, {
                            cardName: cardName,
                            cardDescription: cardDescription,
                            cardAttr1: cardAttr1,
                            cardAttr2: cardAttr2,
                            cardAttr3: cardAttr3,
                            cardImage: cardImage,
                            cardRare: cardRare,
                            cardTrunfo: cardTrunfo,
                            hasTrunfo: hasTrunfo,
                            isSaveButtonDisabled: isSaveButtonDisabled,
                            onInputChange: this.onInputChange,
                            onSaveButtonClick: this.onSaveButtonClick
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("aside", {
                    className: "container-card",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_Card, {
                        cardName: cardName,
                        cardDescription: cardDescription,
                        cardAttr1: cardAttr1,
                        cardAttr2: cardAttr2,
                        cardAttr3: cardAttr3,
                        cardImage: cardImage,
                        cardRare: cardRare,
                        cardTrunfo: cardTrunfo
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
                    className: "container-cards",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_Filter, {
                            onInputChange: this.onInputChange,
                            searchName: searchName,
                            cardRare: cardRare,
                            type: type,
                            trunfoFilter: trunfoFilter
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            className: "cards-save",
                            children: newCard.filter((card)=>card.cardName.includes(searchName)
                            ).filter((card)=>trunfoFilter ? card.cardTrunfo === true : newCard
                            ).filter((card)=>type !== 'todas' ? type === card.cardRare : newCard
                            ).map((card, index)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
                                    className: "container-card",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_Card, {
                                            cardName: card.cardName,
                                            cardDescription: card.cardDescription,
                                            cardAttr1: card.cardAttr1,
                                            cardAttr2: card.cardAttr2,
                                            cardAttr3: card.cardAttr3,
                                            cardImage: card.cardImage,
                                            cardRare: card.cardRare,
                                            cardTrunfo: card.cardTrunfo
                                        }, card.cardName),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                                            className: "button-remove",
                                            "data-testid": "delete-button",
                                            type: "button",
                                            onClick: ()=>this.removeCard(card)
                                            ,
                                            children: "Excluir"
                                        })
                                    ]
                                }, index)
                            )
                        })
                    ]
                })
            ]
        }));
    }
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(874));
module.exports = __webpack_exports__;

})();