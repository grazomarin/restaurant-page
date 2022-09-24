import moment from "moment/moment";
import clock from "../images/contactImages/clock.svg"
import location from "../images/contactImages/location.svg"
import mail from "../images/contactImages/mail.svg"
import phone from "../images/contactImages/phone.svg"

const date = moment().add(1, 'd');
const currentDate = date.format('YYYY-MM-DD');

const inputData = [
    ['text', 'name', 'required', 'Your Full Name:', '.*'],
    ['email', 'email', 'none', 'Your Email:', '.*@.*\..*'],
    ['phone', 'phone', 'required', 'Your Phone Number:', '(\+\d{1,4})?[ -]?\(?(\d{2,3})\)?[ -]?(\d{3})[ -]?(?:(\d{2})[ -]?(\d{2}))'],
    ['date', 'date', 'required', 'Reserve Date:', '']
]

const images = [
    [clock, 'Monday - Saturday <br> 10AM - 12PM'],
    [phone, '+(1) 270-260-2086'],
    [location, 'Subway'],
    [mail, 'dont-email-me-@gmail.com']
]

export default function renderContact() {
    container.classList = 'contact';

    const main = document.createElement('div');
    main.classList = 'main';

    const mainContainer = document.createElement('div');
    mainContainer.classList = 'main-container';

    const maps = document.createElement('iframe');
    maps.classList = 'main-container__gmapCanvas';
    maps.setAttribute('src', 'https://maps.google.com/maps?q=toronto%20subway&t=&z=13&ie=UTF8&iwloc=&output=embed');
    maps.setAttribute('frameborder', '0');
    maps.setAttribute('marginheight', '0');
    maps.setAttribute('marginwidth', '0');
    maps.setAttribute('scrollig', 'no');

    const form = document.createElement('form');
    form.classList = 'main-container-form';

    const inputBundle = document.createElement('div');
    inputBundle.classList = 'main-container-form-line';

    const input = document.createElement('input')
    const label = document.createElement('label')
    const submit = document.createElement('button')
    submit.textContent = 'Submit'
    submit.classList = 'submit'
    submit.setAttribute('type', 'submit')

    for (let i = 0; i < 4; i++) {
        form.appendChild(inputBundle.cloneNode(true));

        Object.assign(input, {
            type: inputData[i][0],
            name: inputData[i][1],
            id: inputData[i][1],
            pattern: inputData[i][4]
        });

        label.textContent = inputData[i][3];
        label.setAttribute('for', inputData[i][1])

        form.querySelectorAll('.main-container-form-line')[i].append(label.cloneNode(true), input.cloneNode(true));
        form.querySelectorAll('input')[i].setAttribute(inputData[i][2], '')
    }

    form.querySelector('input[type="date"]').setAttribute('min', currentDate)

    const divider = document.createElement('div')
    divider.classList = 'divider'

    const contactInfo = document.createElement('div')
    contactInfo.classList = 'main-container-aboutUs'

    const contactInfoBlock = document.createElement('div')
    contactInfoBlock.classList = 'main-container-aboutUs-line'

    const icon = new Image()
    icon.classList = 'main-container-aboutUs-line__icon'
    const description = document.createElement('p')

    for (let i = 0; i < 4; i++) {
        contactInfo.appendChild(contactInfoBlock.cloneNode(true));
        icon.src = images[i][0]
        description.innerHTML = images[i][1]
        contactInfo.querySelectorAll('.main-container-aboutUs-line')[i].append(icon.cloneNode(true), description.cloneNode(true));
    }

    form.append(submit)
    mainContainer.append(maps, form, divider, contactInfo);
    main.append(mainContainer);
    container.append(main);
}

/* <div class="main">
    <div class="main-container">
        <iframe class="main-container__gmapCanvas"
            src="https://maps.google.com/maps?q=toronto%20subway&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
        <form action="" class="main-container-form">
            <div class="main-container-form-line">
                <label for="name">Your Full Name:</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="main-container-form-line">
                <label for="email">Your Email:</label>
                <input type="email" name="email" id="email" pattern=".*@.*\..*">
            </div>
            <div class="main-container-form-line">
                <label for="phone">Your Phone Number:</label>
                <input type="phone" name="phone" id="phone"
                    pattern="(\+\d{1,4})?[ -]?\(?(\d{2,3})\)?[ -]?(\d{3})[ -]?(?:(\d{2})[ -]?(\d{2}))" required>
            </div>
            <div class="main-container-form-line">
                <label for="date">Reserve date:</label>
                <input type="date" name="date" id="date" required>
            </div>
            <button type="reset" class="submit">Submit</button>
        </form>
        <div class="divider"></div>
        <div class="main-container-aboutUs">
            <div class="main-container-aboutUs-line">
                <img src="clock.svg" alt="" class="main-container-aboutUs-line__icon">
                <p>Monday - Saturday <br> 10AM - 12PM</p>
            </div>
            <div class="main-container-aboutUs-line">
                <img src="phone.svg" alt="" class="main-container-aboutUs-line__icon">
                <p>+(1) 270-260-2086</p>
            </div>
            <div class="main-container-aboutUs-line">
                <img src="location.svg" alt="" class="main-container-aboutUs-line__icon">
                <p>Subway</p>
            </div>
            <div class="main-container-aboutUs-line">
                <img src="mail.svg" alt="" class="main-container-aboutUs-line__icon">
                <p>dont-email-me-@gmail.com</p>
            </div>
        </div>
    </div>
</div> */