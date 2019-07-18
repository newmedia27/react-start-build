import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { configStore } from './store';
import App from './components/app';
import ErrorBoundry from './components/error';
import Spinner from './components/spinner';
import './i18n';
import createMiddlewares from './store/middlewares';
import * as serviceWorker from './serviceWorker';

const store = configStore(reducers, createMiddlewares());

const app = (
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Suspense>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
