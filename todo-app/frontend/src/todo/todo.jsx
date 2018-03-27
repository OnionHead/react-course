import React, { Component } from 'react'

import PageHedear from '../template/pageHeader'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHedear name='Tarefas' small='cadastro' />
      </div>
    )
  }
}