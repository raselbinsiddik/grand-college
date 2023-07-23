import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './componenets/Main';
import './index.css';
import AuthProvider from './Provider/AuthProvider';
import Home from './componenets/Home';
import Colleges from './componenets/Colleges';
import SignUp from './componenets/SignUp';
import Login from './componenets/Login';
import CollegeDetails from './componenets/CollegeDetails';
import SearchCollegeDeatails from './componenets/SearchCollegeDeatails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'colleges',
        element:<Colleges></Colleges>
    },
      {
        path: 'signup',
        element:<SignUp></SignUp>
    },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'collegedetails/:id',
        element: <CollegeDetails></CollegeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)

      },
      {
        path: 'searchcollegedetails/:id',
        element: <SearchCollegeDeatails></SearchCollegeDeatails>,
        loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>     
   </AuthProvider>
  </React.StrictMode>,
)
