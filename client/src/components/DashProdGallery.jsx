import { useState, useEffect } from "react"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { DashPreviewCard, DashFilter } from "./index"
import { useSelector, useDispatch } from "react-redux"
import {DashgetDetailId, dashId} from "../redux/actions/index.js"

const DashProdGallery = ({ productos }) => {
    //const [isFiltering, setIsFiltering] = useState(false)
    const [displaying, setDisplaying] = useState([])
    const filtering = useSelector(state => state.dashfilteredProducts)
    const [nShowing, setNShowing] = useState(4)
    const [page, setPage] = useState(1)
    const totalProducts = displaying?.length
    const lastShowing = page * nShowing
    const firstShowing = lastShowing - nShowing
    const amountPages = []
    let onDisplay = []
    const dispatch = useDispatch()
 
    // console.log("PRODUCTOS", productos)
   
    for (let p = 0; p < Math.ceil(totalProducts / nShowing); p++) {
        amountPages.push(p)
    }
    console.log("displaying",displaying)
    displaying && (onDisplay = displaying?.slice(firstShowing, lastShowing))
    const handleClick = (numero) => {
        setPage(numero)
    }
    
    const handleLeftClick = () => {
        page > 1 && (
            setPage(page - 1)
        )
    }
    const handleRightClick = () => {
        page < amountPages.length && (
            setPage(page + 1)
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])
    useEffect(() => {
        setDisplaying(productos)
    }, [productos])
    useEffect(() => {
        console.log("filtering",filtering)
        if(filtering){
        if (filtering[0]) {
            return setDisplaying(filtering)
        }
        if (filtering !== productos) setDisplaying(productos)
    }
    }, [filtering])

    const Pagination = () => (


        <div className="mt-6 flex flex-row mx-auto justify-center gap-6 items-center">
            <button onClick={handleLeftClick} disabled={page === 1 ? true : false} className="text-main-dark dark:text-main-light cursor-pointer hover:bg-verde-dark dark:hover:bg-verde-light dark:hover:text-main-dark p-2 rounded-full">
                <MdChevronLeft />
            </button>
            {/* {amountPages && amountPages.map((e, index) => {
                e = e + 1
                return (
                    <button key={index}
                        onClick={() => handleClick(e)}
                        className={`text-main-dark dark:text-main-light ${e === page ? ' text-main-dark bg-verde-light dark:bg-verde-dark' : 'hover:bg-opacity-10 hover:bg-main-dark dark:hover:bg-main-light dark:hover:text-main-dark'} p-2 rounded-full `}
                    >
                        {e}
                    </button>
                )
            })}  */}
            <button onClick={handleRightClick} disabled={page === amountPages.length ? true : false} className="text-main-dark dark:text-main-light cursor-pointer  hover:bg-verde-dark dark:hover:bg-verde-light dark:hover:text-main-dark p-2 rounded-full">
                <MdChevronRight onClick={handleRightClick} className="text-main-dark dark:text-main-light cursor-pointer " />
            </button>
        </div >
    )


    return (
        <section>
            <DashFilter data={productos} />
            <section className="w-10/12 my-5 mx-auto flex flex-row flex-wrap gap-6 justify-center">
                {onDisplay[0] === 'vacio'
                    ? <section className="w-full shadow-lg border rounded-md py-10 text-main-dark dark:text-main-light bg-main-light dark:bg-main-dark border-verde-light dark:border-verde-dark">
                        La busqueda no produjo ningun resultado, intente cambiando algunos parametros
                    </section>
                    : onDisplay?.map((data, index) => (
                       <DashPreviewCard data={data} key={index}/>
                    ))}
    
            </section>
            <Pagination />
        </section>
    )
}

export default DashProdGallery;