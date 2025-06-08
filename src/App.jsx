import "./App.css";
// import {RouterProvider , createBrowserRouter} from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Booklimousine from "./components/Booklimousine/Booklimousine";
import FlightReservation from "./components/FlightReservation/FlightReservation";
import HotelReservations from "./components/HotelReservations/HotelReservations";
import FloatingContact from "./components/FloatingContact";



const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "limousine", element: <Booklimousine /> },
      { path: "Flight", element: <FlightReservation /> },
      { path: "Hotel", element: <HotelReservations /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  
  return (
    <>
      <RouterProvider router={myRouter} />
      <FloatingContact />
    </>
  );
}

export default App