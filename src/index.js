import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducer.js'
import { BrowserRouter as Router} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'

let store = createStore(rootReducer,
  compose(applyMiddleware(thunk),
    )
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render((
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
