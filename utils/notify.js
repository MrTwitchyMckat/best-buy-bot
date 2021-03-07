const html = require('./parsedHtml');
const notifer = require('node-notifier');

const notify = async () => {
    const checkStatus = async () => {
        const buttonText = await html.parsedHtml();
        if(buttonText == 'Sold Out') {
            console.log('here');
            try {
                notifer.notify({
                    title: 'ALERT ALERT ALERT',
                    message: '3080 IN STOCK ALERT',
                    open: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440',
                });
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log('sold out');
        }
    }
    
    setInterval(checkStatus, 60000)

}
module.exports.notify = notify;
