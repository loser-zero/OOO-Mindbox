import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    toggleComplete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete }) => {
    return (
        <div>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo.id)} 
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
        </div>
    );
};

export default TodoItem;