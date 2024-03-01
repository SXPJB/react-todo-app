import TodoGridHeaders from "./TodoGridHeaders.tsx";
import {Todo} from "../../../../types/Todo";
import TodoGridColumns from "./TodoGridColumns.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {urls} from "../../../utils/urls.ts";
import TodoForm from "../Form/TodoForm.tsx";

const TodoGrid = () => {
    const headers: string[] = ["Title", "Description", "Status", 'Actions']
    const [todos, setTodos] = useState<Todo[]>([])
    const [todo, setTodo] = useState<Todo | undefined>(undefined)

    const loadTask = async () => {
        try {
            const res = await axios.get<Todo[]>(urls.todo.findAll)
            setTodos(res.data)
        } catch (e) {
            console.log(e)
            setTodos([])
        }
    }

    const onDelete = async (id: string) => {
        try {
            console.log("Deleting todo with id: ", id)
            await axios.delete(`${urls.todo.delete}/${id}`)
            await loadTask()
        } catch (e) {
            console.log(e)
        }
    }

    const onEdit = async (id: string) => {
        try {
            console.log("Editing todo with id: ", id)
            const editTodo = await axios.get<Todo>(`${urls.todo.findByID}/${id}`)
            setTodo(editTodo.data)
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        loadTask()
    }, [])

    return (
        <>
            <div className='mb-3'>
                <TodoForm loadTask={loadTask} todoUpdate={todo}/>
            </div>
            <table className='table table-striped'>
                <TodoGridHeaders headers={headers}/>
                <TodoGridColumns todos={todos} onDelete={onDelete} onEdit={onEdit}/>
            </table>
        </>
    );
};

export default TodoGrid;