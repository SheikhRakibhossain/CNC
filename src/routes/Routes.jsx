import React from 'react';
import {createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/category/Category';

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
          path:'/category/:id',
          element:<Category/>
        }
      ]
    },
  ]);

export default router;