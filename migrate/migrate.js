const yaml = require('js-yaml');
const fs = require('fs');
let decks = ['Great-Dalmuti', '54-Playing-Cards', 'Three-Dragon-Ante'];
for (let deck of decks) {
    let cards = yaml.loadAll(fs.readFileSync('../' + deck + '/Deck.yaml', 'utf8'));
    let originId = makeid(16);
    let sortValue = 0;
    let deckString = `{
    "name": "${deck}",
    "type": "deck",
    "description": "${deck} deck",
    "img": "images/${cards[0].back}",
    "data": {},
    "cards": `;
    let newCards = [];
    for (let card of cards) {
        // console.log(card);
        let img = card.img;
        let cardValue = card.data.value;
        let suit = card.data.suit;
        for (let i = 0; i < card.qty; i++) {
            let newCard = {};
            newCard.name = card.name;
            newCard.faces = [{ name: card.name, img: 'images/' + img, text: '' }]
            newCard.width = 2;
            newCard.height = 3;
            newCard.rotation = 0;
            newCard.type = 'base';
            newCard.value = cardValue;
            newCard.suit = suit;
            newCard._id = makeid(16);
            newCard.description = "";
            newCard.data = {};
            newCard.face = 0;
            newCard.drawn = false;
            newCard.sort = sortValue++;
            newCard.flags = {};
            newCard.back = {
                "name": "",
                "text": "",
                "img": null
            };
            newCard.origin = originId;
            newCards.push(newCard);
        }
    }
    deckString += JSON.stringify(newCards);
    deckString += `,
"width": 2,
"height": 3,
"rotation": 0,
"displayCount": true,
"flags": {
  "exportSource": {
    "world": "jaysworld",
    "system": "dnd5e",
    "coreVersion": "9.238",
    "systemVersion": "1.5.6"
  }
}
}`;
    try {
        fs.mkdirSync('../' + deck + '/packs/', { recursive: true });
        fs.writeFileSync('../' + deck + '/packs/' + deck + '.yaml', deckString);
    } catch (error) {
        console.error(error);
    }
};

function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}