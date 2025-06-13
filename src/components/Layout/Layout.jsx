import React from 'react'
import "../../App"
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import NewsTicker from '../NewsTicker';

function Layout() {
  return <>
  
    {/* <Navbar /> */}
    <NewsTicker/>
    <Outlet />
  <Footer />
  
  </>
    
  
}

export default Layout