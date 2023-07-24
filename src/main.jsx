import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admission from './componenets/Admission';
import AdmissionForm from './componenets/AdmissionForm';
import CollegeDetails from './componenets/CollegeDetails';
import Colleges from './componenets/Colleges';
import Home from './componenets/Home';
import Login from './componenets/Login';
import Main from './componenets/Main';
import MyCollege from './componenets/MyCollege';
import NotFound from './componenets/NotFound';
import SearchCollegeDeatails from './componenets/SearchCollegeDeatails';
import SignUp from './componenets/SignUp';
import UserInfo from './componenets/UserInfo';
import './index.css';
import PrivateRoute from './Private/PrivateRoute';
import AuthProvider from './Provider/AuthProvider';

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
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://college-server-weld.vercel.app/colleges/${params.id}`)

      },
      {
        path: 'searchcollegedetails/:id',
        element: <PrivateRoute><SearchCollegeDeatails></SearchCollegeDeatails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://college-server-weld.vercel.app/colleges/${params.id}`)

      },
      {
        path: 'admission',
        element:<Admission></Admission>
      },
      {
        path: 'admissionform',
        element:<AdmissionForm></AdmissionForm>
      },
      {
        path: 'mycollege',
        element:<MyCollege></MyCollege>
      },
      {
        path: 'userinfo',
        element:<UserInfo></UserInfo>
     }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
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
