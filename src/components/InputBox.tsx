import React from 'react';
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";

const InputBox = () => {
    return (
        <InputBoxStyle>
            <input type="text" onChange={() => {
            }}/>
            <button onClick={() => {
            }}>추가
            </button>
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