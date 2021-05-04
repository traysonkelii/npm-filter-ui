import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SearchComponent from './components/SearchComponent'
import store from './redux/store'

import './styles.css'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SearchComponent />
      </Provider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
