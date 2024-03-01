import {Todo} from "../../../../types/Todo";

interface TodoGridColumnsProps {
    todos: Todo[],
    onDelete?: (id: string) => void,
    onEdit?: (id: string) => void
}

const TodoGridColumns = ({todos, onEdit, onDelete}: TodoGridColumnsProps) => {

    return (
        <tbody className='table-group-divider'>
        {todos.map(todo => (
            <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.status}</td>
                <td>
                    <button
                        className='btn btn-light m-2'
                        onClick={onEdit ? () => onEdit(todo.id) : () => console.log("Hello")}
                    >
                        Edit
                    </button>
                    <button
                        className='btn btn-danger'
                        onClick={onDelete ? () => onDelete(todo.id) : () => console.log("Hello")}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))}
        </tbody>
    );
};

export default TodoGridColumns;