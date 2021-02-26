
export default class Todo {
    constructor(data) {
        this._id = data._id
        this.completed = data.completed || false
        this.user = data.user
        this.description = data.description
    }

    get Template() {
        return /*html*/`
    <li class="list-group-item bg-dark">
        <button class="close mb-3" onclick="app.todosController.deleteTodo('${this._id}')"><span >&times;</span></button>
        <input class="form-check-input ml-1 mt-2" type="checkbox" ${this.completed ? "checked" : ""} aria-label="Checkbox" onclick="app.todosController.changeCompletion('${this._id}')"/>
        <p class="ml-4 ${this.completed ? 'completed' : ''}">${this.description}</p>
    </li>
        `
    }
}