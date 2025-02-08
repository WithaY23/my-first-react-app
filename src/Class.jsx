/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

//incomplete project from TOP, a to-do list with add, removal, and change functions
//add and removal works, change does not
class ClassInput extends Component 
{
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      Count: 2,
      editing: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
    this.handleReplace= this.handleReplace.bind(this);
    
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
      Count: state.Count+ 1
    }));

  }

 handleRemoval(entry)
  {
    this.setState((state) =>(
      {
        todos: state.todos.filter(todo => todo !== entry),
        inputVal: '',
        Count: state.Count- 1

      }
    ))
  }
  handleReplace(entry) //add the current to-do to editing list
  {
    this.setState((state) =>(
        {
            editing: state.editing.concat(entry)
        }
      ))
  }

  handleResubmit(entry)
  {
    this.setState((state) =>(
        {
            todos: state.todos.filter(e => e !== entry).concat(state.inputVal),
            inputVal: '',
            editing: state.editing.filter(entry),
        }
      ))
  }
  

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the {this.state.Count} tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <span>
            {
                this.state.editing.some((element) => element === todo) ? 
                <li key={todo}>{todo}
                <button onClick={() =>this.handleRemoval(todo)}> Remove </button>
                <button onClick ={() =>this.handleResubmit(todo)}>Resubmit</button>
                </li>
            :

            <li key={todo}>{todo}
                <button onClick={() =>this.handleRemoval(todo)}> Remove </button>
                <button onClick ={() =>this.handleReplace(todo)}>Edit</button>

            </li>

            }
              {/* <li key={todo}>{todo}</li>
              <button onClick={() =>this.handleRemoval(todo)}> Remove </button>
              <button onClick ={() =>this.handleRemoval(todo)}>Resubmit</button> */}

            </span>

          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
