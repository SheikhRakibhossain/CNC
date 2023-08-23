import React from 'react';
import {createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/category/Category';
import NewsLayout from '../layouts/NewsLayout';
import News from '../pages/news/News';
import Editors from '../components/editor/editors';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[

        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/editors',
            element:<Editors/>
        },
        {
          path:'/category/:id',
          element:<Category/>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path:'news',
      element:<NewsLayout/>,
      children:[

        {
          path:':id',
          element:<News/>,
          loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }

      ]

    }
  ]);

export default router;