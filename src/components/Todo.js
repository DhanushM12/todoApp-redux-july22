import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>
            {this.props.task}
          </td>
        </tr>
      </div>
    )
  }
}
