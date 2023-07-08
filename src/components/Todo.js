import React, { Component } from 'react'
import { deleteTask } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todo extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>
            {this.props.task}<button onClick={() => this.props.deleteTask(this.props.id)}>Delete</button>
          </td>
        </tr>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteTask}, dispatch)
}

export default connect(() => {}, mapDispatchToProps)(Todo);