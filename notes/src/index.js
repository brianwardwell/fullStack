import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';

//Initializes the dd RUM tracking library
datadogRum.init({
    applicationId: '55a2cb60-0acd-4b01-b551-bc862305f52c',
    clientToken: 'pub7aca42be413f787d0df896d9fadba016',
    site: 'datadoghq.com',
    service: 'ECSite',
    env: 'production',
    version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
