
export default class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.name = data.name
    }


    get Template() {
        return /*html*/ `
            <h1 class="mt-3">${this.ConvertedTemp}° F</h1>
            <h1>${this.name}</h1> 
        `
    }

    get ConvertedTemp() {
        return Math.floor((this.temp - 273.15) * 9 / 5 + 32)
    }
}