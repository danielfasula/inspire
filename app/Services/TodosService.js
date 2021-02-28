import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { myApi } from "./AxiosService.js";



class TodosService {
    constructor() {
        this.getTodos()
    }

    async getTodos() {
        try {
            const res = await myApi.get('')
            ProxyState.todos = res.data.map(rawTodo => new Todo(rawTodo))
            ProxyState.user = res.data[0]?.user
        } catch (error) {
            console.error(error);
        }
    }
    async createTodo(newTodo) {
        try {
            const res = await myApi.post('', newTodo)
            ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
        } catch (error) {
            console.error(error);
        }
    }
    async changeCompletion(id) {
        let todo = ProxyState.todos.find(t => t._id == id)
        todo.completed == true ? todo.completed = false : todo.completed = true
        try {
            await myApi.put('' + id, todo)
            ProxyState.todos = ProxyState.todos
        } catch (error) {
            console.error(error);
        }
    }

    async deleteTodo(id) {
        try {
            await myApi.delete('' + id)
            this.getTodos()
        } catch (error) {
            console.error(error);
        }
    }
}

export const todosService = new TodosService();