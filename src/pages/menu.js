import chicken from '../images/menuImages/chicken.jpg'
import crab from '../images/menuImages/crab.jpg'
import mussleSoup from '../images/menuImages/mussleSoup.jpg'
import salad from '../images/menuImages/salad.jpg'
import salmon from '../images/menuImages/salmon.jpg'
import ribs from '../images/menuImages/ribs.jpg'
import sandwich from '../images/menuImages/sandwich.jpg'
import chocolateCake from '../images/menuImages/chocolateCake.jpg'
import cheesecake from '../images/menuImages/cheesecake.jpg'


const sources = [chicken, crab, mussleSoup, salad, salmon, ribs, sandwich, chocolateCake, cheesecake];
const titles = [
    'Grilled Chicken $10',
    'King Crab $19',
    'Mussle Soup $8',
    'Egg Salad $7',
    'Grilled Salmon $32',
    'Ribs $28',
    'Italian Sandwich $10',
    'Chocolate Forest Cake $8',
    'Currant Cheesecake $7'
]

export default function renderMenu() {
    container.classList = 'menu';

    const main = document.createElement('div');
    main.classList.add('main');

    const mainMeal = document.createElement('div');
    mainMeal.classList.add('main-meal');

    const mealAbout = document.createElement('div')
    mealAbout.classList.add('main-meal-about')

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam blanditiis, tenetur maxime quae.'

    const image = new Image();

    //ngl this loop is the smartest thing I've done in a long time
    for (let i = 0; i < 9; i++) {
        main.appendChild(mainMeal.cloneNode(true))

        image.src = sources[i]
        main.querySelectorAll('.main-meal')[i].appendChild(image.cloneNode(true))
        main.querySelectorAll('.main-meal')[i].appendChild(mealAbout.cloneNode(true))

        h1.textContent = titles[i]
        main.querySelectorAll('.main-meal-about')[i].appendChild(h1.cloneNode(true))
        main.querySelectorAll('.main-meal-about')[i].appendChild(p.cloneNode(true))
    }

    container.append(main)
}

/* <div class="main">
            <div class="main-meal">
                <img src="chicken.jpg" alt="">
                <div class="main-meal__about">
                    <h1>Grilled Chicken $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
            <div class="main-meal">
                <img src="crab.jpg" alt="">
                <div class="main-meal__about">
                    <h1>King Crab $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
            <div class="main-meal">
                <img src="musslePasta.jpg" alt="">
                <div class="main-meal__about">
                    <h1>Tasty Chicken $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
            <div class="main-meal">
                <img src="chicken.jpg" alt="">
                <div class="main-meal__about">
                    <h1>Tasty Chicken $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
            <div class="main-meal">
                <img src="chicken.jpg" alt="">
                <div class="main-meal__about">
                    <h1>Tasty Chicken $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
            <div class="main-meal">
                <img src="chicken.jpg" alt="">
                <div class="main-meal__about">
                    <h1>Tasty Chicken $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
            <div class="main-meal">
                <img src="chicken.jpg" alt="">
                <div class="main-meal__about">
                    <h1>Tasty Chicken $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
            <div class="main-meal">
                <img src="chicken.jpg" alt="">
                <div class="main-meal__about">
                    <h1>Tasty Chicken $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
            <div class="main-meal">
                <img src="chocolateCake.jpg" alt="">
                <div class="main-meal__about">
                    <h1>Tasty Chicken $10</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed illum rem nam! Quaerat
                        assumenda nisi quis aperiam, illum architecto recusandae eveniet eum nostrum veritatis magnam
                        blanditiis, tenetur maxime quae.</p>
                </div>
            </div>
        </div> */