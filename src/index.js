import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider as StoreProvider } from 'react-redux';
import storeObj from './store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storeObj;

ReactDOM.render(
  <StoreProvider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </StoreProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
