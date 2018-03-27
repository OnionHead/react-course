import React, { Component } from 'react'

import PageHedear from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
      description: '',
      list:[]
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleAdd() {
    console.log(this)
  }

  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  }

  render() {
    return (
      <div>
        <PageHedear name='Tarefas' small='cadastro' />
        <TodoForm 
          description={this.state.description} 
          handleAdd={this.handleAdd}
          handleChange={this.handleChange} />
        <TodoList />
      </div>
    )
  }
}