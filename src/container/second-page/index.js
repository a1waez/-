import {
  createElement,
  createHeader,
} from '../../script/layout'

const page2 = document.querySelector('.page__2')

const header = createHeader()
page2.append(header)

//=======================================================================================

const CHANGE_LIST = [
  {
    info: 'База знань',
    viewed: true,
  },
  {
    info: 'Інформація',
    viewed: false,
  },
]

const createChange = () => {
  const changeTwo = createElement('div', 'change')

  CHANGE_LIST.forEach((ch) => {
    const change = createElement(
      'div',
      ch.viewed
        ? 'change__ch change--viewed'
        : 'change__ch',
    )

    const text = createElement(
      'div',
      'change__text',
      ch.info,
    )

    const under = createElement('div', 'change__under')
    change.append(text, under)

    changeTwo.append(change)
  })
  return changeTwo
}

const change = createChange()
page2.append(change)
//======

const src = `/img/telegram.png`
// const infoBox = createElement('div', 'info')
const img = createElement('img', 'info__img')

img.src = src
// infoBox.append(img)
page2.append(img)

const title = createElement(
  'h1',
  'title',
  'Що таке база знань?',
)
page2.append(title)

//======

const infoParagraph = createElement(
  'p',
  'post__info',
  `База знань - база даних, що містить правила виведення та інформацію про людський
    досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить
    інформацію, що є результатом вирішення попередніх завдань`,
)
page2.append(infoParagraph)

const button = createElement(
  'button',
  'button button__link-tg',
  `Перейти до ком'юніті у Телеграм`,
)

page2.append(button)

//======
const post = createPost()
