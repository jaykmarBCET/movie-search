// App.js

import Home from "./components/Home";
import UpcomingMovie from "./components/UpcomingMovie";
import PopularMovie from "./components/PopularMovie";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoDialog from "./components/VideoDailog";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";




const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', element:
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
    },
    {
      path: '/upcoming', element:
        <>
          <Navbar />
          <UpcomingMovie />
          <Footer />
        </>
    },
    {
      path: '/popular', element:
        <>
          <Navbar />
          <PopularMovie />
          <Footer />
        </>
    },
    {
      path: '/search', element:
        <>
          <Navbar />
          <Search />
          <Footer />
        </>
    },
    {
      path:'/video',
       element:
       <>
          <Navbar />
          <VideoDialog />
          <Footer />
       </>
    }
  ])
  
   return (
    <>
      <div className="bg-black">
        <RouterProvider router={router} />
      </div>
    </>

  );
};

export default App;