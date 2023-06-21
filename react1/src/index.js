// var react = require("react");

import ReactDOM from 'react-dom/client';
// import Hello from './Demo'
import App2 from './App2';
import { BrowserRouter } from 'react-router-dom'
import App3 from './App3';


const root = ReactDOM.createRoot(document.getElementById('abc'));

root.render(
  <BrowserRouter>
    <App3 />
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

