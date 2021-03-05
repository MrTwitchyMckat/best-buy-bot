import time
import requests 
from bs4 import BeautifulSoup

CARD_URL = "https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440"

def get_page_content(s, url):
    page_html = s.get(url).text
    return BeautifulSoup(page_html, features='html.parser')

def is_in_stock(page_content_bs):
    # get the button 
    add_to_cart_button = page_content_bs.find(attrs={'class': 'add-to-cart-button'})
    return add_to_cart_button.text.strip().lower() != "sold out"

def notify_user():
    pass 

def main():
    s = requests.Session()
    s.headers.update({"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"})
    
    found_card = False 
    while not found_card:
        page_content = get_page_content(s, CARD_URL)
        print(page_content);
        if (is_in_stock(page_content)):
            found_card = True
        else:
            print("Card not in stock. Waiting five seconds...")
            time.sleep(5)

    notify_user()
    print("YO ITS IN STOCK MY DUDEEEEE")
    input()
        


if __name__ == '__main__':
    main()