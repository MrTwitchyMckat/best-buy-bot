const checkStock = require('../utils/checkStock');
const cardHandler = async (cardsList) => {
  const cards = await cardsList;
  for (const card of cards) {
    card.instock = await checkStock.checkStock(card);
    let date = new Date; // Add a timestamp to see live updates on cards
    card.updated = date.toLocaleTimeString();
  };
  return cards;
}
module.exports.cardHandler = cardHandler;