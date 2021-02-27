
function _drawTime() {
    let date = new Date()
    let datetime = date.getHours() + ":" + date.getMinutes()

    document.getElementById('clock').innerHTML = datetime

    console.log(date.getHours(), date.getMinutes().toFixed(2));

}

export default class TimeController {
    constructor() {
        _drawTime()
    }
}