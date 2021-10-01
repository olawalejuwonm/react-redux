import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import App from './MainApp'
import * as reducers from './reducers'

// const store = createStore(combineReducers(reducers))

const myApp = () => {
    render(
      <App />,
      // </Provider>,
      document.getElementById('root')
    )
  return null
}

export default myApp

