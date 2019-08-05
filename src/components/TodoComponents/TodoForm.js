import React from 'react';

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
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button>Add</button>

        {/* clearItems function removes items that have been completed  */}  
        <button onClick={this.props.clearItems}>
            Clear Completed Tasks 
        </button>
      </form>
    );
  }
}

export default TodoForm;
