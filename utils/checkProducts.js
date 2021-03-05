const fetch = require('node-fetch');

const checkProduct = async () => {
    try {
        const response = await fetch('https://bestbuy.com', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:77.0) Gecko/20190101 Firefox/77.0',
                'authority': 'bestbuy.com'
            }, 
        });
        const resJSON = await response.text();
        console.log(resJSON);
    } catch (e) {
        console.log(e);
    }
}

module.exports.checkProduct = checkProduct;