import React, { FC } from 'react';
import {useStores} from "../states/Context";

type ListProps = {
    list: Array<{id: number; text: string;}>
}

const TodoList: FC<ListProps> = ({ list }) => {
    const { TodoStore } = useStores()

    return (
        <ul>
            {
                TodoStore.todos.map(item => (
                    <li>
                        <strong>{item.id}</strong>
                        <p>{item.text}</p>
                        <button onClick={() => {}}>수정</button>
                        <button onClick={() => {}}>삭제</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default TodoList;