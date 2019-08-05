import React from "react";

// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
const Todo = props => {

  return (
    // div has an onClick event listener to set the state of props.item.complete using toggleItem function
    <div 
    onClick={() => props.toggleItem(props.item.id)} 
    className={props.item.completed === true ? "add-line" : ""}
    >

      {console.log(`has ${props.item.task} task been completed?`, props.item.completed)}

      {/* task name = props.item.task */}
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
