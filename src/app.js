import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initStore from 'store';

const appStore = initStore({});

class App extends React.Component {
  render() {
    return <Provider store={appStore} />;
  }
}

render(<App />, document.getElementById('app-root'));
