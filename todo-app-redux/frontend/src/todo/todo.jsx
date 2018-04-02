import React from 'react'

import PageHedear from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
  <div>
    <PageHedear name='Tarefas' small='cadastro' />
    <TodoForm />
    <TodoList />
  </div>
)