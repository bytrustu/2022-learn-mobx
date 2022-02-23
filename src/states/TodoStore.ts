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

    @observable
    todos: Array<any> = []

    constructor(root: any) {

        this.rootStore = root
        this.todos = [
            new Todo(1, 'aaaa'),
            new Todo(2, 'bbbb'),
            new Todo(3, 'cccc'),
            new Todo(4, 'dddd'),
        ]
    }
}