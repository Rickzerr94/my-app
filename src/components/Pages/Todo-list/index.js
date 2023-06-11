import React, { useState } from 'react';

import './todo-list.css'




const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const updatedTodos = [...todos, { task: newTodo, completed: false }];
            setTodos(updatedTodos);
            setNewTodo('');
        }
    };

    const handleToggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <div className='todolist'>
            <h2>Todo list</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => handleToggleTodo(index)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.task}
                    </li>
                ))}
            </ul>
            <div className='todoInput'>
                <input type="text" value={newTodo} onChange={handleInputChange} />
                <button onClick={handleAddTodo}>Add</button>
            </div>
        </div>
    );
};

export default TodoList;