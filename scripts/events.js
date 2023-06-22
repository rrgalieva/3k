const cards = [
  {
    title: 'скидки на весь абсурд 100%',
    description: 'акция распространяется на все товары для дома',
    date: 'дата: 13 мая 2022',
    url: '../src/events/1.svg'
  },
  {
    title: 'лекция "наслаждайся"',
    description: 'на ней мы расскажем о главных новинках от аб–завода',
    date: 'дата: 18 июля 2023 12:00',
    url: '../src/events/2.svg'
  },
  {
    title: 'лекция "что такое аб–завод?"',
    description: 'короткая лекция о устройстве завода и рассказ о профессиях',
    date: 'дата: 22 июля 2003 01:00',
    url: '../src/events/3.svg'
  },
  {
    title: 'выбери свой (личный) персональный чайник',
    description: 'мастер–класс от креативного центра',
    date: 'дата: 30 января 2004 6:15',
    url: '../src/events/4.svg'
  },
  {
    title: 'лекция "используй"',
    description: 'на ней мы расскажем о главных новинках от аб–завода',
    date: 'дата: 10 сентября 2024 10:30',
    url: '../src/events/5.svg'
  }
]

async function generateEventCards() {
  const eventsSlider = document.getElementsByClassName('events')[0]
  const response = await fetch('../templates/eventCard.html');
  const resHtml = await response.text();
  for (let card of cards) {
    const element = document.createElement('swiper-slide')
    element.innerHTML = resHtml
    eventsSlider.appendChild(element)
    element.getElementsByClassName('card__cover')[0].setAttribute("src", card.url);
    element.getElementsByClassName('card__description')[0].innerHTML = card.description;
    element.getElementsByClassName('card__title')[0].innerHTML = card.title;
    element.getElementsByClassName('card__date')[0].innerHTML = card.date;
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

generateEventCards();
