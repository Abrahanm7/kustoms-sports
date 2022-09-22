import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { Home, Details, Categories } from '../views/index'
import { Profile2 } from '../views/Profile2';
import { Carrito } from '../components';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/producto/:id'} element={<Details/>} />
                    <Route path={'categories/:category/:value'} element={<Categories/>} />
                    <Route path={'/profile'} element={<Profile2/>} />
                    <Route path={'/carrito'} element={<Carrito/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas