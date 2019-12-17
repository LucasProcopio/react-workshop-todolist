import React, { useState } from 'react';
import { map, filter } from 'lodash';

import { Container, TextInput, Button, Header } from './styles';

import Todo from '../Todo';

export default function Home() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Ir para academia',
      remove: false,
      done: false
    },
    {
      id: 2,
      title: 'Fazer bolo',
      remove: false,
      done: false
    }
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const newList = [...todoList];

    newList.push({
      id: Math.random()
        .toString(36)
        .substr(2, 10),
      title: todo,
      remove: false,
      done: false
    });
    setTodoList(newList);
  }

  function toggleItem(itemId) {
    const newList = map(todoList, function(listItem) {
      if (listItem.id == itemId) {
        listItem.done = !listItem.done;
      }
      return listItem;
    });

    setTodoList(newList);
  }

  function removeItem(itemId) {
    const newList = filter(todoList, function(listItem) {
      if (listItem.id == itemId) {
        return false;
      }

      return true;
    });
    setTodoList(newList);
  }

  return (
    <>
      <Header>Lista de tarefas</Header>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="addTodo"
            type="text"
            value={todo}
            onChange={e => setTodo(e.target.value)}
            placeholder="Adicionar nova tarefa"
          />
          <Button type="submit">Adicionar</Button>
        </form>
        <Todo
          removeItem={removeItem}
          toggleItem={toggleItem}
          todoList={todoList}
        />
      </Container>
    </>
  );
}
