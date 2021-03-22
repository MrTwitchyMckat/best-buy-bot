const checkStock = require('../utils/checkStock');
const cardHandler = async (cardsList) => {
  const cards = await cardsList;
  for (const card of cards) {
    card.instock = await checkStock.checkStock(card);
  };
  return cards;
}
module.exports.cardHandler = cardHandler;