import {TodoStore} from "./TodoStore";


export class RootStore {
    movieStore

    constructor() {
        this.movieStore = new TodoStore(this)
    }
}