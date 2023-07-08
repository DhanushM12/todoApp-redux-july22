import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            Tasks
          </thead>
         <thead>
          Actions
         </thead>
         <tbody>
            {this.props.tasks.map((task, index) => 
              <Todo key={index} task={task} id={index}/>
            )}
         </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(TodoList);