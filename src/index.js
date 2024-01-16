import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoginContextProvider } from './context/LoginContext';
import reportWebVitals from './reportWebVitals.js'
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react'

// 與supabase連線
const supabaseUrl = 'https://aovunyhykwveawebkhbt.supabase.co'
// react要讀取env檔 黨名前須加上'REACT_APP_'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <SessionContextProvider supabaseClient={supabase}>
        <App />
      </SessionContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
