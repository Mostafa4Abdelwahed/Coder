import {React, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../components/navbar'
import Footer from './../components/footer'

const Layout = () => {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Layout