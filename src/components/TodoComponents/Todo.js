import React from 'react';

const Todo = props => {

  return (
    // div has an onClick event listener to set the state of props.item.complete using toggleItem function
    <div onClick={() => props.toggleItem(props.item.id)}>

      {console.log(`has ${props.item.task} task been completed?`, props.item.completed)}

      {/* task name = props.item.task */}
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
