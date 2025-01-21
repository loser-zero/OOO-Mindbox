import React, { useState } from 'react';
import { Todo } from './types';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all'); // Состояние фильтра

    const addTodo = () => {
        if (newTodo.trim()) {
            const newTodoItem: Todo = {
                id: Date.now().toString(),
                text: newTodo.trim(),
                completed: false,
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const toggleComplete = (id: string) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Фильтрация задач в зависимости от выбранного фильтра
    const filteredTodos = () => {
        switch (filter) {
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'incomplete':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="container">
            <h1>ToDo App</h1>
            <div>
                <input 
                    type="text" 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)} 
                    placeholder="Введите новую задачу" 
                />
                <button onClick={addTodo}>Добавить</button>
            </div>
            <div className="filter">
                <label>
                    <input 
                        type="radio" 
                        value="all" 
                        checked={filter === 'all'} 
                        onChange={() => setFilter('all')} 
                    />
                    Все
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="incomplete" 
                        checked={filter === 'incomplete'} 
                        onChange={() => setFilter('incomplete')} 
                    />
                    Невыполненные
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="completed" 
                        checked={filter === 'completed'} 
                        onChange={() => setFilter('completed')} 
                    />
                    Выполненные
                </label>
            </div>
            <div className="todo-list">
                <h2>Задачи</h2>
                <TodoList todos={filteredTodos()} toggleComplete={toggleComplete} />
            </div>
        </div>
    );
};

export default App;