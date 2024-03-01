export type TodoStatus = 'Created' | 'In Progress' | 'Done'

export interface Todo {
    id: string,
    title: string
    description: string
    status: TodoStatus
}