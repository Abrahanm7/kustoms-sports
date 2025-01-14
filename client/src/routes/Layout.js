import {NavBar, Footer} from '../components'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout