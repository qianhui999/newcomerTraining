import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/app/index';
import reportWebVitals from './reportWebVitals';
// 配置redux
import { Provider } from 'react-redux';
import createStoreWithMdware from './store/index';
import reducers from './reducer/index';
//创建store
import 'antd/dist/antd.css';
const store = createStoreWithMdware(reducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
export {store}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
