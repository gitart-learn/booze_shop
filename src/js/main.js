import '../sass/main.scss'
import openModal from '../defaultModal/defaultModal'

const btnCart = document.querySelector('.header__cart')
const cartModal = document.querySelector('.cart-modal')
btnCart.addEventListener('click', () => {
  openModal(cartModal)
})

const btnContacts = document.querySelector('.footer__contacts')

const contactsModal = document.querySelector('.contacts-modal')
btnContacts.addEventListener('click', () => {
  openModal(contactsModal)
})

