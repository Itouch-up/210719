import React from 'react';
import './index.css';
import Root from './client/Root'
import registerServiceWorker from './registerServiceWorker'
import ReactDom from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
ReactDom.render(<Root/>,document.getElementById('root'))
registerServiceWorker()