import React from "react";
import "./components/TodoComponents/Todo.css"
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";

// given todo array 
const todoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // parent component 

  constructor() {
    // inherit properties from React.Component 
    super(); 

    // set initial state 
    this.state = {
      todoList: todoArray,
    }
  }

  // add an item by creating a new array with the added item 
  addItem = (itemName) => {

    // set the values for the keys using the newItem's information 
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };

    // create a new array with the old items and the new item and set it to todoList 
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  // toggle complete/incomplete on a given item 
  toggleItem = (id) => {
    
    // set the state of the item that matches the id 
    this.setState({
      
      // map over todoList (an array of objects)
      todoList: this.state.todoList.map(item => {

        console.log("item object id and toggled id:", item.id, id)

        if (item.id === id) {
          // the id's match 
          
          // return the item object with all of the properties it had before but change the
          // completed key's value to true/false 
          return {
            ...item,
            completed: !item.completed
          };

        } else {
          // the id's do not match 
          return item;
        }
      })
    });
  };

  // remove the items that have been completed 
  clearItems = () => {

    this.setState({
      // map over todoList (an array of objects)
      todoList: this.state.todoList.filter(item => {

        console.log("item object complete status:", item.task, item.completed);

        // only return the items that have not been completed
        return item.completed === false
      })
    })
  }

  // remove the items that have been completed 
  filterItems = (task) => {

     // set the state of the item that matches the id 
     this.setState({
      
      // map over todoList (an array of objects)
      todoList: this.state.todoList.filter(item => {

        console.log("item task and task:", item.task, task)
        
        return item.task.includes(task)

      })
    });
  };

  render() {
    return (
      <div className="app-container">
        <div id="todo-heading-container">
          <h1 id="todo-heading">Todo List</h1>
        </div>
        <TodoList 
          todoList={this.state.todoList}
          toggleItem={this.toggleItem}
          clearItems={this.clearItems}
        />
        <TodoForm
         addItem={this.addItem}
         filterItems={this.filterItems} 
         />
      </div>
    );
  }
}

export default App;
