import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

import Routes from './routes'
import Menun from '../template/menu'

export default props => (
  <div className='container'>
    <Menun />
    <Routes />
  </div>
)