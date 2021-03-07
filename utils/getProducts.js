const axios = require('axios');

const getProduct = async () => {
    try {
        const response = await axios('https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440');
        const resJSON = await response.data;
        return resJSON;
    } catch (e) {
        return e;
    }
}

module.exports.getProduct = getProduct;