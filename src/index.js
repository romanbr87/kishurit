import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleAnalyticsProvider } from 'react-ga4-gtag';

import './App.css'
import "./style/well.css"
import "./style/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

// import "./style/style.css";

ReactDOM.render(
  <React.StrictMode>
    <GoogleAnalyticsProvider measurementId={process.env.REACT_APP_GOOGLE_ANALYTICS_ID}>
      <App />
    </GoogleAnalyticsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
