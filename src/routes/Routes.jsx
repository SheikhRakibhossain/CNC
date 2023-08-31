import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/category/Category';
import NewsLayout from '../layouts/NewsLayout';
import News from '../pages/news/News';
import Editors from '../components/editor/editors';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Video from '../pages/Video/Video';
import Travel from '../pages/travel/Travel';
import Sports from '../pages/sports/Sports';
import PrivateRoute from './PrivateRoute';
import Terms from '../pages/termsAndCondition/Terms';
import Us from '../pages/US/Us';
import UserLayout from '../layouts/UserLayout';
import NavPageLayout from '../layouts/NavPageLayout';
import Style from '../pages/StylePage/Style';
import World from '../pages/world/World';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [

      {
        path: '/',
        element: <Category />,
        loader: ({ params }) => fetch('https://cnc-server.vercel.app/news')
      },
      {
        path: '/category/:id',
        element: <Category />,
        loader: ({ params }) => fetch(`https://cnc-server.vercel.app/categories/${params.id}`)
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/editors',
        element: <Editors />
      }
    ]
  },

  {
    path: 'news',
    element: <NewsLayout />,
    children: [

      {
        path: ':id',
        element: <News />,
        loader: ({ params }) => fetch(`https://cnc-server.vercel.app/news/${params.id}`)
      }

    ]

  },
  {
    path: '/',
    element: <UserLayout />,
    children: [

      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },

    ]


  },
  {
    path: '/',
    element: <NavPageLayout />,
    children: [
      {
        path: 'video',
        element: <PrivateRoute><Video /></PrivateRoute>
      },
      {
        path: 'travel',
        element: <PrivateRoute><Travel /></PrivateRoute>
      },
      {
        path: 'sports',
        element: <PrivateRoute><Sports /></PrivateRoute>
      },
      {
        path: 'terms',
        element: <Terms />
      },
      {
        path: 'us',
        element: <Us />
      }
      ,
      {
        path: 'style',
        element: <Style/>
      }
      ,
      {
        path: 'world',
        element: <World/>
      }
    ]
  }



]);

export default router;