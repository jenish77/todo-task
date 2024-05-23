// TodoList.js
import React, { useState, useEffect } from 'react';
import {
  GlobalStyle,
  Container,
  Title,
  TodoListStyled,
  TodoItem,
  TodoText,
  TodoStatus,
  DeleteButton,
  Loading,
  Error,
  NewTodoForm,
  NewTodoInput,
  NewTodoButton,
} from './TodoList.styles';

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

  const handleNewTodoChange = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodoTitle.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setNewTodoTitle('');
  };

  const handleDeleteTodo = (id) => {
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
          {todos.map((todo) => (
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
