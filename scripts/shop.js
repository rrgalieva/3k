const cards = [
  {url:'../src/events/Rectangle.svg', details:'держатель для бутылки', price: 900},
  {url:'../src/shop/Rectangle 1.svg', details:'рукостул (мягкий)', price: 2400},
  {url:'../src/shop/Rectangle-2.svg', details:'пьяная книжница', price: 3900},
  {url:'../src/shop/Rectangle-3.svg', details:'смартфон ультрамегамакс 3', price: 2300},
  {url:'../src/shop/Rectangle-4.svg', details:'школьные принадлежности', price: 1500},
  {url:'../src/shop/Rectangle-5.svg', details:'скейтборд', price: 1600},
  {url:'../src/shop/Rectangle-6.svg', details:'веник', price: 700},
  {url:'../src/shop/Rectangle-7.svg', details:'кейс для карандашей', price: 800},
  {url:'../src/shop/Rectangle-8.svg', details:'вешалка аб-банан', price: 450},
  {url:'../src/shop/Rectangle-9.svg', details:'лейка', price: 1000},
  {url:'../src/shop/Rectangle-10.svg', details:'надувной стул', price: 1100},
  {url:'../src/shop/Rectangle-11.svg', details:'тапочки домашние', price: 1900},
  {url:'../src/shop/Rectangle-12.svg', details:'кружка для большой семьи', price: 1300},
  {url:'../src/shop/Rectangle-13.svg', details:'стул+стул', price: 1400},
  {url:'../src/shop/Rectangle-14.svg', details:'линейка "для него"', price: 1700},
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
