import { useEffect, useState } from 'react'

import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/router';

function App() {
    useEffect(() => {
        Aos.init({
          duration: 800, // You can customize
          once: false,    // Animation happens every time
        });
      }, []);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App