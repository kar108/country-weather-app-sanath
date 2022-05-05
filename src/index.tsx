import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import CountryName from './pages/CountryName';
import CountryDetails from './pages/CountryDetails';
import CapitalInfo from './pages/CapitalInfo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryName/>}/>
        <Route path="/CountryDetails" element={<CountryDetails/>}/>
        <Route path="/CapitalInfo" element={<CapitalInfo/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
