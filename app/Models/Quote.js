
export default class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get Template() {
        return /*html*/`
        <h3>"${this.content}"</h3>
        <h5>-${this.author} <small>(probably)</small></h5>
        `
    }
}