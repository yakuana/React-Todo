import React from 'react';

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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super(); 

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

    console.log("item id:", id);
    
    // set the state of the item that matches the id 
    this.setState({
      
      // map over todoList (an array of objects)
      todoList: this.state.todoList.map(item => {

        console.log("item object:", item)

        if (item.id === id) {
          // the id's match 
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
