
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home';
import AppHome from './component/AppHome';
import Login from './component/UserComponent/Login';
import ContactUs from './component/ContactUs';
import SuccessStories from './component/SuccessStories';
import CoursesPage from './component/CoursesPage';
import AboutUs from './component/AboutUs';
import SignUp from './component/UserComponent/SignUp';
import Profile from './component/UserComponent/Profile';
import User from './component/User';
import UserContext from './component/UserComponent/UserContext';
import React, { useEffect, useState } from 'react';
import URLContext from './component/URLContext';
import ErrorPage from './component/UserComponent/UserTools/ErrorPage';
import Error from './component/Error';

function App() {
  const [user, setUser] = useState();
  const url="https://backend.placementsbymehta.com/";
  // // const url = "http://localhost/phpmyadmin/api/";
  // const url = "http://localhost:8005/";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error/>,
      children: [
        {
          path: "",
          element: <AppHome />,
        },
        {
          path: "/home",
          element: <AppHome />,
        },
        {
          path: "/courses/:courseId",
          element: <CoursesPage />,
        },
        {
          path: "/success stories",
          element: <SuccessStories />,
        },
        {
          path: "/about us",
          element: <AboutUs />,
        },
        {
          path: "/contact us",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: '/users',
      element: <User />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        }, {
          path: "",
          element: <Profile />
        }, {
          path: ":tab/:courseID",
          element: <Profile />
        }
      ]
    },
  ]);
  useEffect(() => {
    const sessionData = localStorage.getItem('placeMehta');

    if (sessionData !== null) {
      try {
        const session = JSON.parse(sessionData);
        setUser(session);
      } catch (error) {
        console.error("Error parsing session data:", error);
      }
    }
  }, [])
  return (
    <div className="App">
      <URLContext.Provider value={{ url }}>
        <UserContext.Provider value={{ user, setUser }}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </URLContext.Provider>
    </div>
  );
}

export default App;
