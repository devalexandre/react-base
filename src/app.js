import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './reducers'
import Main from './router'

class App extends Component {
  render() {
    return (
    <Provider store={store}>
       <Main/>
    </Provider>
    );
  }
}

export default App;
