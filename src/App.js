import React from 'react';
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import Restaurant from "./components/Restaurant";
import Spa from "./components/Spa";
import Contact from "./components/Contact";
import Rooms from "./components/Rooms";

// react router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/room/:id",
        element: <RoomDetails />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/spa",
        element: <Spa />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
