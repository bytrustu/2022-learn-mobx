import {TodoStore} from "./TodoStore";


export class RootStore {
    TodoStore

    constructor() {
        this.TodoStore = new TodoStore(this)
    }
}