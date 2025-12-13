import '../App.css'
import { useContext } from "react"
import { DarkLightContext } from "../components/darklight.context"
import imagen_avatar from "../assets/imgs/avatar.jpg" 
export const Hero = () => {
    const {changeTheme} = useContext(DarkLightContext)
    
    return (
        <>
            <section className="m-auto w-11/12 items-center">
                <div className='h-16 my-2'></div>
                <div className="flex gap-22 justify-center place-items-center">
                    <div className="m-4 place-items-center-safe">
                        <h1
                        className='mb-8'
                        >AGUSTIN M MARRERO</h1>

                        <h2
                        className='text-2xl mb-2'
                        >full stack developer </h2>
                        <p>&lt; building things on the internet /&gt;</p>
                    </div>
                    <div >
                        <img 
                        src={imagen_avatar} 
                        alt="imagen de avatar" 
                        width={'200px'} 
                        className={`avatar ${changeTheme}`}
                        />
                        
                    </div>
                </div>
                <div className='m-4 mt-8 place-items-center justify-between'>
                    <p>_disfruto programar y encontrar soluciones que mejoren la experiencia del usuario.
                    </p>
                    <p> _busco crecer en este camino, aprender, construir y compartir.</p>
                </div>
            </section>
        </>
    )
}