import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import homeLayout from "../layouts/homeLayout";
import Home from "../pages/Home";
import EventDetails from "../components/EventDetails/EventDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfile from "../pages/MyProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: homeLayout,
    children: [
      { index: true, 
        loader:()=>fetch('/events.json'),
        Component: Home },
      { path:'/event/:id', 
        loader:()=>fetch('/events.json'),
        element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute> },
      { path:'/login', 
        loader:()=>fetch('/events.json'),
        Component: Login },
      { path:'/register', 
        loader:()=>fetch('/events.json'),
        Component: Register },
      {
        path:'/myProfile',
        Component:MyProfile,
      },
    ],
  },
  {
    path:'*',
    Component:NotFound,
  }
]);
