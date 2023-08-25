import { MarkAsDoneIcon } from '../../Components/Images/MarkAsDoneIcon';
import { DeleteIcon } from '../../Components/Images/DeleteIcon';
import './styles.css';
import { formatDate } from '../../Utilities/FormatDate';
const ERROR_MESSAGE = 'nie udało sie ukończyć';
export const ToDoCard = ({
  todo,
  handleMarkAsDone,
  handleDelete,
  isDeleteError,
  isMarkAsDoneError,
}) => {
  const { title, author, note, createdAt, doneDate, isDone } = todo;

  return (
    <div className={`todo-card ${isDone && 'todo-card__markAsDone'}`}>
      <div className="todo-card__details">
        <h2 className="todo-card__title">{title}</h2>
        <p className="todo-card__author">{author}</p>
        <p className="todo-card__createdAt">{createdAt}</p>
        <p className="todo-card__note">{note}</p>
      </div>
      <div className="todo-card__aside">
        <div className="todo-card__controls">
          <MarkAsDoneIcon
            className={`todo-card__markAsDoneIcon ${
              isMarkAsDoneError && 'todo-card__markAsDoneError'
            }`}
            onClick={handleMarkAsDone}
          />
          <DeleteIcon
            className={`todo-card__deleteIcon ${
              isDeleteError && `todo-card__deleteError`
            }`}
            onClick={handleDelete}
          />
        </div>
        <div className="todo-card__message">
          {(isMarkAsDoneError || isDeleteError) && ERROR_MESSAGE}
        </div>
        <div className="todo-card__status">
          {isDone && (
            <>
              <MarkAsDoneIcon className="todo-card__markAsDoneIconDone " />
              <div className="todo-card__doneDate">{doneDate}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
