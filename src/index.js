import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Home';
import { Datacontex } from './contex/Datacontex';

const router = createBrowserRouter([
  {
    path: "/jadwal-sekolah/",
    element: <App/>
  },
  {
    path: "/jadwal-sekolah/home",
    element: <Home/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Datacontex>
   <RouterProvider router={router} />
    </Datacontex>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
