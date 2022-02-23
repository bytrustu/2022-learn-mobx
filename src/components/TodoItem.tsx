import React, {FC} from 'react';

type ItemProps = {
    item: {
        id: number;
        text: string;
    }
}

const TodoItem: FC<ItemProps> = ({item}) => {
    return (
        <li>
            <strong>{item.id}</strong>
            <p>{item.text}</p>
            <button onClick={() => {
            }}>수정
            </button>
            <button onClick={() => {
            }}>삭제
            </button>
        </li>
    );
};

export default TodoItem;