import './style.css';
import renderHome from './pages/home';
import renderMenu from './pages/menu';
import clearPage from './functions/clear';

var container = document.getElementById('container')
const home = document.getElementById('home')
const menu = document.getElementById('menu')

renderHome()

home.addEventListener('click', () => {
    clearPage()
    renderHome()
})
menu.addEventListener('click', () => {
    clearPage()
    renderMenu()
})

