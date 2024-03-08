import {React, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './../components/sidebar'

const layout = () => {
    return (
        <Fragment>
            <Sidebar />
            <div className="pr-0 lg:pr-[300px] pt-[57px] lg:pt-0"><Outlet /></div>
        </Fragment>
    )
}

export default layout