import React, { Component } from 'react'

import PageHedear from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHedear name='Tarefas' small='cadastro' />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}