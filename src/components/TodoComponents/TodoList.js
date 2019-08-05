import React from 'react';
import Todo from './Todo';

const TodoList = props => {

  return (
    <div>
        {/* Map over todoList and create a div/p tag for each item using Todo component  */}   
        {props.todoList.map(item => (<Todo key={item.id} item={item} toggleItem={props.toggleItem} />))}
    </div>
  );
};

export default TodoList;
