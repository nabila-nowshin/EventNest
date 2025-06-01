import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import homeLayout from "../layouts/homeLayout";
import Home from "../pages/Home";
import EventDetails from "../components/EventDetails/EventDetails";


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
        Component: EventDetails },
    ],
  },
]);
