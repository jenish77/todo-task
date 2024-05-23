// TodoList.styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 304px;
    min-height: 105vh;
    background-color: #e0f7fa;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const TodoListStyled = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const TodoItem = styled.li`
  background-color: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TodoText = styled.span`
  flex-grow: 1;
  text-align: left;
  margin-right: 10px;
  color: black;
`;

export const TodoStatus = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  background-color: ${props => (props.completed ? '#4caf50' : '#f44336')};
  color: white;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  background-color: #9c0b00;
  color: white;
  cursor: pointer;
  margin-left: 9px;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const Loading = styled.div`
  font-size: 1.5rem;
  color: #333;
`;

export const Error = styled.div`
  font-size: 1.2rem;
  color: red;
`;

export const NewTodoForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NewTodoInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  border: 1px solid #ccc;
  background-color: bisque;
  border-radius: 4px;
  flex-grow: 1;
  color: black;
`;

export const NewTodoButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
