import React, { Component } from 'react'

import PageHedear from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  constructor(props){
    super(props)

    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    console.log(this)
  }

  render() {
    return (
      <div>
        <PageHedear name='Tarefas' small='cadastro' />
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList />
      </div>
    )
  }
}