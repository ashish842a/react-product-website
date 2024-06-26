import React from 'react';
import ReactDOM from 'react-dom'; // Importing ReactDOM correctly
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
