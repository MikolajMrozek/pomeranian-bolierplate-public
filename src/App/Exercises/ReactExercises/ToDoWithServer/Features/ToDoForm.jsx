import './styles.css';
import { useState } from 'react';
import { Button, Label, Input, InputTextArea } from '../Components/index';

export const ToDoForm = () => {
  const [isError, setIsError] = useState(false);
  const handleADD = (event) => {
    event.preventDefault();
    const succes = Math.random() > 0.5;
    if (succes) {
      handleGoBack();
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  const handleGoBack = () => {};

  return (
    <div>
      <p>Dodawanie zadania</p>
      <form className="todo-form">
        <Label htmlFor="title">Tytuł</Label>
        <Input id="title" placeholder="Kupić parasol na balkon" />
        <Label htmlFor="author">Autor</Label>
        <Input id="author" placeholder="Wojtek" />
        <Label htmlFor="note">Treść</Label>
        <InputTextArea id="note" placeholder="Treść" />
        {isError && (
          <p className="todo-form__error">Wystąpił błąd, spróbuj ponownie.</p>
        )}
        <div className="todo-form__controls">
          <Button type="reset" onClick={handleGoBack} variant="secondary">
            Cofnij
          </Button>
          <Button type="submit" onClick={handleADD}>
            Dodaj
          </Button>
        </div>
      </form>
    </div>
  );
};
