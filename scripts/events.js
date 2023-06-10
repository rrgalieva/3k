const cards = [
  {
    title: 'лекция о работе на аб-заводе',
    description: 'на ней мы расскажем о главных особенностях: график, зп, фишки, особенности',
    date: 'дата: 32 января 2022 16:05',
    url: '/src/events/Asset 8@2x.svg'
  },
  {
    title: 'лекция о работе на аб-заводе',
    description: 'на ней мы расскажем о главных особенностях: график, зп, фишки, особенности',
    date: 'дата: 32 января 2022 16:05',
    url: '/src/events/Asset 8@2x.svg'
  },
  {
    title: 'лекция о работе на аб-заводе',
    description: 'на ней мы расскажем о главных особенностях: график, зп, фишки, особенности',
    date: 'дата: 32 января 2022 16:05',
    url: '/src/events/Asset 8@2x.svg'
  },
  {
    title: 'лекция о работе на аб-заводе',
    description: 'на ней мы расскажем о главных особенностях: график, зп, фишки, особенности',
    date: 'дата: 32 января 2022 16:05',
    url: '/src/events/Asset 8@2x.svg'
  },
  {
    title: 'лекция о работе на аб-заводе',
    description: 'на ней мы расскажем о главных особенностях: график, зп, фишки, особенности',
    date: 'дата: 32 января 2022 16:05',
    url: '/src/events/Asset 8@2x.svg'
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