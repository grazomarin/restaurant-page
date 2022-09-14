import './index.scss';
import './style-home.scss'
import './style-menu.scss'
import Logo from './images/restaurantLogo.svg'
import renderHome from './pages/home';
import renderMenu from './pages/menu';
import clearPage from './functions/clear';
import renderContact from './pages/contact';

var container = document.getElementById('container')
const home = document.getElementById('home')
const menu = document.getElementById('menu')
const contact = document.getElementById('contact')
const title = document.querySelector('.constant__title')

const myLogo = new Image(40);
myLogo.src = Logo;
myLogo.classList.add('logo')
title.prepend(myLogo)

renderHome()

home.addEventListener('click', () => {
    clearPage()
    renderHome()
})
menu.addEventListener('click', () => {
    clearPage()
    renderMenu()
})
contact.addEventListener('click', () => {
    clearPage()
    renderContact()
})


//make website check if the page is active
// if it is then don't reload

