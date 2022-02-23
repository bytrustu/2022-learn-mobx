import {action, makeObservable, observable} from 'mobx'

class Todo {
    id: number;
    text: string;

    constructor(id: number, text: string) {
        this.id = id
        this.text = text
    }

}

export class TodoStore {
    rootStore

    todos: Array<any> = []

    constructor(root: any) {

        makeObservable(this, {
            todos: observable,
            createTodo: action,
            deleteTodo: action,
            updateTodo: action,
        })

        this.rootStore = root
        this.todos = [
            new Todo(1, 'aaaa'),
            new Todo(2, 'bbbb'),
            new Todo(3, 'cccc'),
            new Todo(4, 'dddd'),
        ]
    }

    createTodo(text: string) {
        this.todos = [
            ...this.todos,
            new Todo(this.todos[this.todos.length - 1].id + 1, text)
        ]
        console.log(this.todos)
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(el => el.id !== id)
    }

    updateTodo(id: number, text: string) {
        const idx = this.todos.findIndex(el => el.id === id)
        const todo = this.todos
        this.todos = [
            ...this.todos.slice(0, idx),
            new Todo(id, text),
            ...this.todos.slice(idx + 1, this.todos.length)
        ]
    }
}