import { Application } from '@splinetool/runtime';
import grapeFields from '../images/homeImages/grapeFields.jpg'
import restaurant from '../images/homeImages/restaurant.jpg'

export default function renderHome() {
    container.classList = 'home'

    const main = document.createElement('div');
    main.classList.add('main');

    const mainContents = document.createElement('div');
    mainContents.classList.add('main-contents');

    const myGrapeFields = new Image();
    myGrapeFields.src = grapeFields;
    myGrapeFields.classList.add('main-contents__grape-fields');

    const myRestaurant = new Image();
    myRestaurant.src = restaurant;
    myRestaurant.classList.add('main-contents__restaurant');

    let text1 = document.createElement('p');
    let text2 = document.createElement('p');
    text1.textContent = text2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo illo velit id, veniam repudiandae neque ab tempora eligendi a laborum nisi fugiat mollitia, obcaecati cupiditate aspernatur voluptatum magni quos delectus vero iure facere hic quae iusto. Architecto error illum, laudantium expedita harum, ea accusamus maxime sapiente mollitia magni ducimus sunt ab nostrum ipsa? Explicabo eaque nobis quam asperiores eligendi minima culpa ipsa doloribus voluptates laudantium doloremque est magnam inventore dolore quos, itaque debitis voluptatum soluta? Accusantium possimus suscipit sapiente deserunt totam aliquid laboriosam magnam hic tenetur laudantium. Non ullam autem quas debitis, dolorum perspiciatis quis, vel dolore atque, iusto fugiat!';

    const bottle = document.createElement('canvas');
    bottle.width = 400;
    bottle.height = 1000;

    const app = new Application(bottle);
    app.load('https://prod.spline.design/k4qLStuvRveZcxqt/scene.splinecode');

    mainContents.append(myGrapeFields, text1, text2, myRestaurant);
    main.append(bottle, mainContents);
    container.append(main);
}

