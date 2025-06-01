import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import homeLayout from "../layouts/homeLayout";
import Home from "../pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: homeLayout,
    children: [
      { index: true, 
        loader:()=>fetch('/events.json'),
        Component: Home },
    ],
  },
]);
