import { Application } from '@splinetool/runtime';

export default function renderHome () {
    const test = document.createElement('div')
    test.textContent = 'home'

    const bottle = document.createElement('canvas')
    bottle.id = 'canvas3d'
    bottle.width = 400
    bottle.height = 1000
    bottle.setAttribute('data-engine', 'three.js r142')

    new Application(bottle).load('https://prod.spline.design/k4qLStuvRveZcxqt/scene.splinecode');

    container.append(bottle, test)
}

