import React from 'react';
import Todo from './Todo';

const TodoList = props => {

  return (
    <div className="todo-list-container">
        {/* Map over todoList and create a div/p tag for each item using Todo component  */}   
        {props.todoList.map(item => (<Todo key={item.id} item={item} toggleItem={props.toggleItem}/>))}

        {/* clearItems function removes items that have been completed   
        <button onClick={props.clearItems}  id="clear">
              Clear Completed 
          </button> */}
    </div>
  );
};

export default TodoList;
