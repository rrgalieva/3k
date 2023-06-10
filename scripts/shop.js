const cards = [
  {url:'../src/shop/Rectangle.svg', details:'glass1', price: 100},
  {url:'../src/shop/Rectangle 1.svg', details:'glass2', price: 200},
  {url:'../src/shop/Rectangle-2.svg', details:'glass3', price: 300},
  {url:'../src/shop/Rectangle-3.svg', details:'glass4', price: 400},
  {url:'../src/shop/Rectangle-4.svg', details:'glass5', price: 500},
  {url:'../src/shop/Rectangle-5.svg', details:'glass6', price: 600},
  {url:'../src/shop/Rectangle-6.svg', details:'glass7', price: 700},
  {url:'../src/shop/Rectangle-7.svg', details:'glass8', price: 800},
  {url:'../src/shop/Rectangle-8.svg', details:'glass9', price: 900},
  {url:'../src/shop/Rectangle-9.svg', details:'glass10', price: 1000},
  {url:'../src/shop/Rectangle-10.svg', details:'glass11', price: 1100},
  {url:'../src/shop/Rectangle-11.svg', details:'glass12', price: 1200},
  {url:'../src/shop/Rectangle-12.svg', details:'glass13', price: 1300},
  {url:'../src/shop/Rectangle-13.svg', details:'glass14', price: 1400},
  {url:'../src/shop/Rectangle-14.svg', details:'glass15', price: 1500},
]

async function generateCards() {
  const shopGrid = document.getElementsByClassName('shop__grid')[0]
  const response = await fetch('../templates/shopCard.html');
  const resHtml = await response.text();
  for (let card of cards) {
    const element = document.createElement('div')
    element.innerHTML = resHtml
    shopGrid.appendChild(element)
    element.getElementsByClassName('card__cover')[0].setAttribute("src", card.url);
    element.getElementsByClassName('card__description')[0].innerHTML = card.details;
    element.getElementsByClassName('card__price')[0].innerHTML = card.price;
    const innerCard = element.getElementsByClassName('card')[0]
    innerCard.addEventListener('click', (e) => {
      if (innerCard.classList.contains('card_active')) {
        innerCard.classList.remove('card_active')
      }
      else {
        innerCard.classList.add('card_active')
      }
    })
  }
}

generateCards();