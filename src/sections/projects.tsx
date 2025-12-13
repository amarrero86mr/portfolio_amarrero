import { Carousel } from "../components/carousel"
import { slidesData } from "../info/proyect_info"
export const Projects = () => {
    
    return (
        <>
            <div className='my-2 mb-2'></div>
            <h2>PROJECTs</h2>
            <Carousel data={slidesData}></Carousel>
            
        </>
    )
}