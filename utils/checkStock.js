const fetchUrl = require('./fetchUrl');
const htmlParser = require('node-html-parser');

const checkStock = async (card) => {
  const cardVendor = card.vendor;
  let inStock = false;
  const cardData = await fetchUrl.fetchUrl(card.url);
  const html = htmlParser.parse(cardData);

  if(cardVendor == 'bestbuy') {
    if (html.querySelector('.fulfillment-add-to-cart-button .btn').innerText == 'Add to Cart') {
      inStock = true;
    }
  }
  if(cardVendor == 'newegg') {
    if (html.querySelector('.product-inventory strong').innerText == 'In stock.') {
      inStock = true;
    }
  }
  if(cardVendor == 'amd') {
    if (html.querySelector('.product-out-of-stock') == null) {
      inStock = true;
    }
  }
  return inStock;
}
module.exports.checkStock = checkStock;