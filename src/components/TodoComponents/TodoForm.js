import React from 'react';

// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// Once a todo is submitted, the Todo List should re-render and show the added todo.
class TodoForm extends React.Component {

  constructor() {
    // inherit from parent component 
    super();

    // create a state specifically for TodoForm.js and Todo.js 
    this.state = {
      item: ''
    };
  }

  handleChanges = event => {
    // updates state using event changes 

    this.setState({
      // sets item equal to the name of the task and the value of the task 
      [event.target.name]: event.target.value
    });
  };

  submitItem = event => {
    // allows tasks to be added 
    event.preventDefault();

    this.props.addItem(this.state.item);
  };

  render() {
    return (
      <div className="todo-form-container">
        <form onSubmit={this.submitItem} className="todo-form">
          <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
            className="input"
            placeholder=" ...todo"
          />

          <button id="add">Add</button>
        </form>

        <div className="buttons">

          {/* filterItems function displays items that match the search word */}
          <button onClick={() => {
            console.log("state at click:", this.state.item); 
            return this.props.filterItems(this.state.item)}} 
            id="add">
              Search
          </button>

          {/* clearItems function removes items that have been completed    */}
          <button onClick={this.props.clearItems}  id="clear">
              Clear Completed 
          </button>
        </div>

      </div>
    );
  }
}

export default TodoForm;
