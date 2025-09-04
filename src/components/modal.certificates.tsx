import { useContext } from "react"
import type { TSlideProyect } from "../info/proyect_info"
import { DarkLightContext, type TDarkLightContext } from "./darklight.context"


export const ModalCertificate = (
    props: {
        fnOnModalCert: () => void,
        data:TSlideProyect
    }) => {

        const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
    return (
        <>
            <div
        className={`velo-certificate ${changeTheme}`}
        onClick={()=>props.fnOnModalCert()}
        ></div>
            <div
                className={`modal-certificate h-8/12 w-9/12 ${changeTheme}`}
            >
                <h3 className="text-3xl text-center m-0">{props.data.title}</h3>
                
                <img src={props.data.image} alt={props.data.title} className="max-h-10/12 m-auto rounded-lg shadow-sm border-2 place-self-center" />

            </div>
        </>
    )
}