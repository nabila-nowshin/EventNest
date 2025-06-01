import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="">
        <p className="color-accent">Hello World</p>
        <button className="btn btn-primary">hello</button></div>,
  },
]);
