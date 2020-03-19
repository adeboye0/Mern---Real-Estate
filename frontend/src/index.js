import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './components/common/images/favicon.ico';
import "./components/common/css/font-awesome/all.min.css";
import "./components/common/css/flaticon/flaticon.css";
import "./components/common/css/bootstrap/bootstrap.min.css";
import "./components/common/css/select2/select2.css";
import "./components/common/css/range-slider/ion.rangeSlider.css";
import "./components/common/css/owl-carousel/owl.carousel.min.css";
import "./components/common/css/magnific-popup/magnific-popup.css";
import "./components/common/css/style.css";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
