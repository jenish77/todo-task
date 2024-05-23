import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

const Container = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const TodoListStyled = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TodoItem = styled.li`
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

const TodoText = styled.span`
  flex-grow: 1;
  text-align: left;
  margin-right: 10px;
  color: black;
`;

const TodoStatus = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  background-color: ${props => (props.completed ? '#4caf50' : '#f44336')};
  color: white;
`;

const DeleteButton = styled.button`
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

const Loading = styled.div`
  font-size: 1.5rem;
  color: #333;
`;

const Error = styled.div`
  font-size: 1.2rem;
  color: red;
`;

const NewTodoForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NewTodoInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  border: 1px solid #ccc;
  background-color: bisque;
  border-radius: 4px;
  flex-grow: 1;
  color: black;
`;

const NewTodoButton = styled.button`
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

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
       
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleNewTodoChange = (event:any) => {
    setNewTodoTitle(event.target.value);
  };

  const handleNewTodoSubmit = (event:any) => {
    event.preventDefault();
    if (newTodoTitle.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };

    setTodos([ newTodo,...todos]);
    setNewTodoTitle('');
  };

  const handleDeleteTodo = (id:any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>Error: {error}</Error>;
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Todo List</Title>
        <NewTodoForm onSubmit={handleNewTodoSubmit}>
          <NewTodoInput
            type="text"
            value={newTodoTitle}
            onChange={handleNewTodoChange}
            placeholder="Enter new todo"
          />
          <NewTodoButton type="submit">Add Todo</NewTodoButton>
        </NewTodoForm>
        <TodoListStyled>
          {todos.map((todo:any) => (
            <TodoItem key={todo.id}>
              <TodoText>{todo.title}</TodoText>
              <TodoStatus completed={todo.completed}>
                {todo.completed ? 'Completed' : 'Pending'}
              </TodoStatus>
              <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>Delete</DeleteButton>
            </TodoItem>
          ))}
        </TodoListStyled>
      </Container>
    </>
  );
}

export default TodoList;
