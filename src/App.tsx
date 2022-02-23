import React from 'react';
import './App.css';
import styled from "styled-components";
import InputBox from "./components/InputBox";

function App() {
  return (
    <Main>
      <TodoPage>
          <h1>TODO LIST</h1>
          <InputBox />
      </TodoPage>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TodoPage = styled.section`
  
  width: 1000px;
  height: 600px;
  border: 1px solid #ddd;
  
  h1 {
    text-align: center;
  }
`

export default App;
