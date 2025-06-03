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
import Feedback from "../components/Feedback";
import Loader from "../components/Loader";
import ForgotPassword from "../pages/ForgotPassword";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: homeLayout,
    children: [
      { index: true, 
        loader:()=>fetch('/events.json'),
        Component: Home, 
        hydrateFallback: <Loader />
      },
      { path:'/event/:id', 
        loader:()=>fetch('/events.json'),
        element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute> ,
         hydrateFallback: <Loader />
      },
        
      { path:'/login', 
        element: <Login></Login>
      },
      { path:'/login/ForgetPassword', 
        element:<ForgotPassword></ForgotPassword>
      },
      { path:'/register',
        element:<Register></Register>,
        },
      {
        path:'/myProfile',
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
          path:"/feedback",
          element:
            <PrivateRoute>
              <Feedback />
            </PrivateRoute>
      }
    ],
  },
  {
    path:'*',
    Component:NotFound,
  }
]);
