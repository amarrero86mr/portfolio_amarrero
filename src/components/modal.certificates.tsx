import { useContext } from "react"
import type { TSlideProyect } from "../info/proyect_info"
import { DarkLightContext, type TDarkLightContext } from "./darklight.context"


export const ModalCertificate = (
    props: {
        fnOnModalCert: () => void,
        data: TSlideProyect
    }) => {

    const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
    return (
        <>
            <div
                className={`velo-certificate ${changeTheme}`}
                onClick={() => props.fnOnModalCert()}
            ></div>
            <div
                className={`modal-certificate h-8/12 w-9/12 ${changeTheme}`}
            >
                <div className="grid grid-cols-6 gap-1">
                    <h3 className="text-3xl text-center col-span-5">{props.data.title}</h3>
                    <button
                        onClick={() => props.fnOnModalCert()}
                        className="text-3xl text-right col-span-1 mr-1"
                    >X</button>
                </div>

                <img src={props.data.image} alt={props.data.title} className="max-h-10/12 m-auto rounded-lg shadow-sm border-2 place-self-center" />

            </div>
        </>
    )
}