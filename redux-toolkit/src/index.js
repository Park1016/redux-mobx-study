import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store1 = createStore(store, composeWithDevTools());


ReactDOM.render(
  <Provider  //리액트-리덕스 연결
  store={store} //리덕스 연결
  >  
      <App  // 리액트 연결
      >
      </App> 
  </Provider>, 
document.querySelector('#root'));

