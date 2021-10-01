import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import * as reducers from './Reducers'

const store = createStore(combineReducers())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)