import chicken from '../images/menuImages/chicken.jpg'
import crab from '../images/menuImages/crab.jpg'
import musslePasta from '../images/menuImages/musslePasta.jpg'
import salad from '../images/menuImages/salad.jpg'
import salmon from '../images/menuImages/salmon.jpg'
import ribs from '../images/menuImages/ribs.jpg'
import sandwich from '../images/menuImages/sandwich.jpg'
import chocolateCake from '../images/menuImages/chocolateCake.jpg'
import cheesecake from '../images/menuImages/cheesecake.jpg'


const sources = [chicken, crab, musslePasta, salad, salmon, ribs, sandwich, chocolateCake, cheesecake];

export default function renderMenu() {
    container.classList = 'menu';

    const main = document.createElement('div');
    main.classList.add('main');

    const mainMeal = document.createElement('div');
    mainMeal.classList.add('main-meal');

    const image = new Image();

    //ngl this loop is the smartest thing I've done in a long time
    for (let i = 0; i < 9; i++) {
        main.appendChild(mainMeal.cloneNode(true))
        image.src = sources[i]
        main.querySelectorAll('.main-meal')[i].appendChild(image.cloneNode(true))
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