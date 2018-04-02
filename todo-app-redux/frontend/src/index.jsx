//react/rexu libs
import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//middlewares
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

//Components
import App from './main/app'
import reducers from './main/reducers'

const store = applyMiddleware(thunk)(createStore)(reducers)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('app'))