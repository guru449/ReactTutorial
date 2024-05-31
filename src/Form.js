import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: ''
      }
    }
    
    handleUserChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments}`)
        event.preventDefault()
    }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <div>
        <label>UserName</label>
        <input type='text' value={this.state.username} onChange={this.handleUserChange}/>
        </div>
        <div>
        <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value = {this.state.topic}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <div>
        <button type='submit'>Submit</button>
        </div>
      </div>
      </form>
    )
  }
}

export default Form
