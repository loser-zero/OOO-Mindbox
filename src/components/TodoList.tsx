import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
            ))}
        </div>
    );
};

export default TodoList;