import React, { useState , useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {

  return (
    <>
    <Header />
    {/* to dynamically pass other pages in the component */}
    <Outlet />
    <Footer />
    </>
  
  )
}

export default Layout