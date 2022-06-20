import '../sass/main.scss';
import openModal from './defaultModal'


const btnCart = document.querySelector('.header__cart');
btnCart.addEventListener('click', () => {
  openModal('.cart-modal')
})

const btnContants = document.querySelector('.footer__contacts');
btnContants.addEventListener('click', () => {
  openModal('.contacts-modal')
})



