import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
