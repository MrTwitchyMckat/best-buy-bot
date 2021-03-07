const htmlParser = require('node-html-parser');
const productPage = require('./getProducts');

const parsedHtml = async () => {
    const rawHtml = await productPage.getProduct();
    const html = htmlParser.parse(rawHtml);
    return html.querySelector('.fulfillment-add-to-cart-button .btn').innerText;
}

module.exports.parsedHtml = parsedHtml;