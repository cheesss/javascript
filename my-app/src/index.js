import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './ch4/Clock';
import CommentList from './ch5/CommentList'


// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,   
//     document.getElementById(`root`)
//   );
// }, 1000);    시계를 만들기 위해 1000ms 마다 반복하는 코드


ReactDOM.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,   
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
