import React, {useEffect, useState} from "react";
import axios from "axios";
import {urls} from "../../../utils/urls.ts";
import {Todo} from "../../../../types/Todo";

interface TodoFromCreated {
    title: string;
    description: string;
    status: string;
}

interface TodoFromProps {
    loadTask: () => void
    todoUpdate?: Todo
}

const TodoForm = ({loadTask, todoUpdate}: TodoFromProps) => {

    const [todo, setTodo] = useState<TodoFromCreated>({
        title: '',
        description: '',
        status: ''
    })
    // Si existiera un catalago de status se rellenaria mediante una llamada a la API
    const todoStatus = [{
        value: 'CREATED',
        label: 'Created'
    }, {
        value: 'IN_PROGRESS',
        label: 'In Progress'
    }, {
        value: 'DONE',
        label: 'Done'
    }]

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if(todoUpdate){
                const res = await axios.patch<Todo>(`${urls.todo.update}/${todoUpdate.id}`, todo)
                console.log(res)
                return
            }
            const response = await axios.post<Todo>(urls.todo.create, todo)
            console.log(response)
        } catch (error) {
            console.error(error)
            alert("An error occurred while trying to create the todo. Please try again.")
        } finally {
            loadTask()
            setTodo({
                title: '',
                description: '',
                status: ''
            })
        }
    }

    useEffect(() => {
        if (todoUpdate) {
            setTodo({
                title: todoUpdate.title,
                description: todoUpdate.description,
                status: todoUpdate.status
            })
        }
    }, [todoUpdate]);

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                className='form-control'
                placeholder='Title'
                name='title'
                value={todo.title}
                onChange={onChange}
            />
            <input
                type='text'
                className='form-control mt-3'
                placeholder='Description'
                name='description'
                value={todo.description}
                onChange={onChange}
            />
            <select className='form-select mt-3'
                    name='status'
                    value={todo.status}
                    onChange={onChange}
            >
                {todoStatus.map((status, index) => (
                    <option
                        key={index}
                        value={status.value}>
                        {status.label}
                    </option>
                ))}
            </select>
            <button
                className='btn btn-primary mt-3'>
                {todoUpdate? 'Update' : 'Create'}
            </button>
        </form>
    );
};

export default TodoForm;