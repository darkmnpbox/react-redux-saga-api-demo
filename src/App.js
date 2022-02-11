import './App.css';
import Header from './components/Header';
import Trending from './components/Trending';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducers from './redux/rooReducer';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Trending />
      </Provider>
    </div>
  );
}

export default App;
