import './styles.css';
import { useEffect, useState } from 'react';
import { Button, Label, Input, InputTextArea } from '../../Components/index';
import { ToDoCard } from '../ToDoCard/ToDoCard';

const TODOS = [
  {
    id: 1,
    title: 'Todo 1',
    createdAt: '2021-05-22T11:20:22.935Z',
    author: 'Anonymous',
    isDone: true,
    doneDate: '2021-05-22T11:20:22.935Z',
    note: 'Done the course',
  },
  {
    id: 3,
    title: 'Todo 18',
    note: 'Poprowadzić kurs',
    author: 'NowyMiki',
    isDone: false,
    createdAt: '2023-08-19T08:34:38.228Z',
  },
  {
    id: 4,
    title: 'AddButton',
    note: 'newTODO',
    author: 'MikiKiki',
    isDone: false,
    createdAt: '2023-08-19T10:29:26.739Z',
  },
  {
    id: 5,
    title: 'AddButton',
    note: 'newTODO',
    author: 'MikiKiki',
    isDone: true,
    createdAt: '2023-08-19T10:31:00.158Z',
  },
];

export function ToDoList({ handleAddToDo }) {
  const [todos, setTodos] = useState([]);
  const [isGetListError, setIsGetListError] = useState(false);

  const getAllToDos = () => {
    const succes = Math.random() > 0.5;
    if (succes) {
      setTodos(TODOS);
      setIsGetListError(false);
    } else {
      setIsGetListError(true);
      setTodos([]);
    }
  };
  useEffect(() => {
    getAllToDos();
  }, []);

  const handleRefresh = () => {
    getAllToDos();
  };
  const handleMarkAsDone = (id) => {
    const succes = Math.random() > 0.5;
    if (succes) {
      setTodos((currentTodos) => {
        return currentTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: true,
              doneDate: new Date().toISOString(),
            };
          } else {
            return todo;
          }
        });
      });
    } else {
    }
  };
  const handleDelete = (id) => {};
  return (
    <div className="todo-list">
      <p>Tutaj znajdziesz liste swoich zadań</p>
      <div className="todo-list__container"></div>
      {todos.map((todo) => (
        <ToDoCard
          key={todo.id}
          todo={todo}
          handleDelete={() => handleDelete(todo.id)}
          handleMarkAsDone={() => handleMarkAsDone(todo.id)}
          isDeleteError={false}
          isMarkAsDoneError={true}
        />
      ))}
      {isGetListError && (
        <>
          <p>Przepraszamy. Nie udało sie pobrać listy zadań.</p>
          <Button onClick={handleRefresh}>Odśwież widok</Button>;
        </>
      )}
      <Button onClick={handleAddToDo}>Dodaj zadanie</Button>;
    </div>
  );
}
