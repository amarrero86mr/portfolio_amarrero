import { useContext } from "react"
import type { TSlideProyect } from "../info/proyect_info"
import { DarkLightContext, type TDarkLightContext } from "./darklight.context"


export const ModalProyect = (
    props: {
        fnOnModalProyect: () => void,
        data: TSlideProyect
    }) => {

    const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
    return (
        <>
            <div
                className={`velo-certificate ${changeTheme}`}
                onClick={() => props.fnOnModalProyect()}
            ></div>
            <div
                className={`modal-certificate h-8/12 w-9/12 ${changeTheme}`}
            >
                <div className="grid grid-cols-6 gap-1">

                    <h3 className="text-3xl text-center col-span-5">{props.data.title}</h3>
                    <button
                        onClick={() => props.fnOnModalProyect()}
                        className="text-3xl text-right col-span-1 mr-1"
                    >X</button>
                </div>
                <div className="grid grid-cols-6 gap-1 m-auto">
                    <img src={props.data.image} alt={props.data.title} className="max-h-10/12 m-auto rounded-lg shadow-sm border-2  col-span-3" />
                    <div className="col-span-3 gap-1 grid grid-rows-6">
                        <p className="text-lg content-center row-span-2 row-start-1">
                            {props.data.description}
                        </p>
                        <p className="text-lg content-center row-start-3 row-span-1">
                            {props.data.status}
                        </p>
                        {props.data.linkweb !== null ?
                        <a target="_blank" className="text-lg content-center row-start-4 row-span-1" href={props.data.linkweb}>{props.data.linkweb}</a>
                        : null
                        }
                        {props.data.linkgit !== null ?
                        <a target="_blank" className="text-lg content-center row-start-5 row-span-1" href={props.data.linkgit}>{props.data.linkgit}</a>
                        : null }
                    </div>

                </div>


            </div>
        </>
    )
}