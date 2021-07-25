import React from 'react';

//components
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos }) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                { filteredTodos.map(todo => (
                     <Todo
                      setTodos={setTodos}
                      todo={todo} 
                      todos={todos} 
                      key={todo.id}
                      text={todo.text}
                      id={todo.id} 
                        />
                )
                )}
            </ul>
        </div>
    )
}

export default TodoList;