// var react = require("react");

import ReactDOM from 'react-dom/client';
// import Hello from './Demo'
import App from './App';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('abc'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// JSX
/*
    1. casecen...  <H1>  --- <h1>
    2. <div class=""
      <div className=""

    3. <lable for=""
      <lable HtmlFor=""

    4. normal js code not allowd

*/

