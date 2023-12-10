import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Drawer from '../components/Drawer'
import { Outlet } from 'react-router-dom'
import { PageContext } from '../contexts/PageContext'

const DefaultLayout = () => {

    const [page, setPage] = useState('first');
    
    return (
        <PageContext.Provider value={{page, setPage}}>
            <header>
                <Header />
            </header>
            <main className='grid grid-flow-col auto-cols-max'>
                {/* { page != 'result' && <Drawer /> } */}
                <Outlet />
            </main>
        </PageContext.Provider>
    )
}

export default DefaultLayout