import { ProxyState } from '../AppState.js'

function _drawGreeting() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let session = "AM";
    let user = ProxyState.user?.toUpperCase()
    let greeting = (h < 12) ? "Good Morning" : (h >= 12 && h < 18) ? "Good Afternoon" : "Good Evening"

    h = (h == 0) ? h = 12 : h;
    h = (h > 12) ? h -= 12 : h;
    session = (h > 12) ? session = "PM" : session;
    // @ts-ignore
    h = (h < 10) ? "0" + h : h;
    // @ts-ignore
    m = (m < 10) ? "0" + m : m;

    let time = h + ":" + m + " " + session;

    document.getElementById('clock').innerText = time

    document.getElementById('greeting').innerText = user ? greeting + ", " + user + "!" : greeting + "!"

    setTimeout(_drawGreeting, 3000)

}

export default class GreetingController {
    constructor() {
        _drawGreeting()
    }

    setUser(event) {

    }
}