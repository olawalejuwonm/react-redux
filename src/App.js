import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import App from './MainApp'
import {user} from './reducers'
export const store = createStore(combineReducers({user}))

const myApp = () => {
    render(
      <Provider store={store}>
      <App />,
       </Provider>,
      document.getElementById('root')
    )
  return null
}

export default myApp

