import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import RoutesGenerator from './components/RoutesGenerator'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

        <RoutesGenerator />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
