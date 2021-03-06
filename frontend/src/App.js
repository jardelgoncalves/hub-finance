import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes'
import store from './store'

import { GlobalStyle } from './components/GlobalStyle'

const App = () => (
  <Provider store={store}>
    <Routes />
    <GlobalStyle />
  </Provider>
)

export default App;
