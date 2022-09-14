import React from 'react'
import { Link } from 'react-router-dom'

const PreviewCard = () => {
    const data = {
        "clotheType": "shirt",
        "brand": "adidas",
        "name": "camiseton",
        "gender": "x",
        "sport": "running",
        "collection": "primavera",
        "color": "darkred",
        "size": "xxl",
        "image": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2c6ff231fe04a809820aec4010a2b1d_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_21_model.jpg',
        "stock": "10",
        "price": "13000",
        "promotion": "0.15"
    }
    if (data) {
        return (
            <Link to={''} className='min-w-[16.3rem] shadow-md h-72'>
                < div className='relative' >
                    <img src={data.image} alt="Imagen producto" className='w-full h-52 object-cover' />
                    <div className='absolute bottom-1 left-1 flex flex-row bg-main-light dark:bg-main-dark'>
                        <span className='text-base'>$</span>
                        <p className=' text-main-dark dark:text-main-light  px-1  text-xsm'>{data.price}</p>
                    </div>
                </div >
                <div className='bg-main-light dark:bg-main-dark text-center flex flex-col gap-1 mt-1'>
                    <h2 className=' text-main-dark dark:text-main-light text-base font-bold'>{`${data.name} ${data?.gender}`}</h2>
                    <h2 className=' text-main-dark dark:text-main-light text-base'>{data.brand}</h2>
                    <h4 className=' text-main-dark dark:text-main-light text-xsm'>{`${data.clotheType} ${data.sport}`}</h4>
                </div>
            </Link >
        )
    } else {
        return (
            <div className='w-[16.3rem] h-72 animate-pulse'>
                < div className='relative w-full h-52 bg-gris-light dark:bg-gris-dark' >
                    <span className='w-full h-52 ' />
                    <span className='absolute bottom-1 left-1 flex flex-row bg-gris-dark dark:bg-gris-light w-16 h-4' />
                </div >
                <div className='bg-main-light dark:bg-main-dark text-center flex flex-col gap-1 mt-1 h-24'>
                    <span className=' bg-gris-light dark:bg-gris-dark text-base font-bold w-3/4 h-4 mx-auto' />
                    <span className=' bg-gris-light dark:bg-gris-dark text-base font-bold w-8/12 h-4 mx-auto' />
                    <span className=' bg-gris-light dark:bg-gris-dark text-base font-bold w-3/12 h-2 mx-auto' />
                </div>
            </div >
        )
    }
}

export default PreviewCard