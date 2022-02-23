import React, {ChangeEvent, useCallback, useState} from 'react';
import styled from "styled-components";
import {useStores} from "../states/Context";

const InputBox = () => {

    const { TodoStore } = useStores()
    const [input, setInput] = useState<string>('')

    const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }, [])

    const onClickButton = useCallback(() => {
        TodoStore.createTodo(input)
        console.log(input)
    }, [input])

    return (
        <InputBoxStyle>
            <input
                type="text"
                onChange={onChangeInput}
                value={input}
            />
            <button onClick={onClickButton}>추가</button>
        </InputBoxStyle>
    );
};

const InputBoxStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  input {
    width: 200px;
    height: 20px;
  }

  button {
    width: 100px;
    height: 20px;
    margin: 0 0 0 10px;
  }
`

export default InputBox;