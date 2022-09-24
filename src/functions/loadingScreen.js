import frame1 from '../images/animationImages/frame1.svg';
import frame2 from '../images/animationImages/frame2.svg';
import frame3 from '../images/animationImages/frame3.svg';

function setLoading() {
    const body = document.querySelector('body')

    var loadingCont = document.createElement('div')
    loadingCont.classList = 'loadingScreen'

    const loadingImg = document.createElement('img')
    loadingImg.src = frame1
    loadingImg.width = 250
    loadingImg.height = 250
    loadingImg.classList = 'loadingScreen__logoAnim'

    const cssAnimation = document.createElement('style');
    const rules = document.createTextNode('@-webkit-keyframes anim {' +
        `0% { content: url(${frame3}) }` +
        `50% { content: url(${frame1}) }` +
        `100% { content: url(${frame2}) }` +
        '}');
    cssAnimation.appendChild(rules);
    document.getElementsByTagName("head")[0].appendChild(cssAnimation);

    loadingCont.append(loadingImg)
    body.append(loadingCont)
}

function rmvLoadOnLoad() {
    window.addEventListener('load', () => {
        document.querySelector('.loadingScreen').remove()
        page
    })
}

function rmvLoadOnTime() {
    setTimeout(() => {
        document.querySelector('.loadingScreen').remove()
    }, 2000);
}

export { setLoading, rmvLoadOnLoad, rmvLoadOnTime };