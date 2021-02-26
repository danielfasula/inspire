import { todosService } from '../Services/TodosService.js'
import { ProxyState } from '../AppState.js'

function _drawTodos() {
    let todos = ProxyState.todos
    let template = ''

    todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template

    document.getElementById('total-todos').innerText = `${ProxyState.todos.filter(t => t.completed == true).length} / ${ProxyState.todos.length} `
}


export default class TodosController {
    constructor() {
        _drawTodos()
        ProxyState.on('todos', _drawTodos)
    }

    createTodo(event) {
        event.preventDefault()
        let form = event.target
        let newTodo = {
            description: form.description.value
        }
        todosService.createTodo(newTodo)
    }

    changeCompletion(id) {
        todosService.changeCompletion(id)
    }

    deleteTodo(id) {
        todosService.deleteTodo(id)
    }

}