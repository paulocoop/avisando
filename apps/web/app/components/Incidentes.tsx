import { FaArrowRight, FaShareAlt, FaExternalLinkAlt } from "react-icons/fa"
import { IoIosPin, IoMdDownload } from "react-icons/io"
import ClientOnly from "./ClientOnly"
import type { Prensa, Incidente } from "airtable/fields"

type IncidentesProp = {
    incidentes: Incidente[]
    prensa: Prensa[]
}

export function IncidenteDate({ fecha }: { fecha: string }) {
    const date = new Date(fecha);
    return (
        <div className="w-28 min-w-28 h-fit font-thin opacity-50 tabular-nums text-center flex flex-col items-center justify-center">
            <h1 className="text-5xl">{date.getDay() + 1}</h1>
            <p className="text-2xl">{date.toLocaleString('default', { month: 'long' })}</p>
            <p className="text-lg">{date.getFullYear()}</p>
        </div>
    )
}

function onShare(inc: Incidente) {
    const shareData = {
        title: inc.Incidente,
        text: inc["Breve resumen"],
        url: `${window.location.protocol}//${window.location.host}/entries/${inc.id}`
    };
    console.log(shareData);
    // return navigator.canShare(shareData) || navigator.share(shareData);
    return navigator.share(shareData);
}

export default function Incidentes({ incidentes, prensa }: IncidentesProp) {
    return (<ul className="flex flex-col gap-5 overflow-y-scroll overflow-x-hidden">

        {incidentes.map((inc) => (
            <li key={inc.id} className="flex flex-row border-t-2 border-b-2 border-white/50 rounded-lg p-5">
                <input type="hidden" value={JSON.stringify(inc)} />
                <ClientOnly>
                    <IncidenteDate fecha={inc.Fecha} />
                </ClientOnly>
                <div className="flex flex-col gap-2 max-h-60 sm:h-auto justify-start items-start content-start">
                    <h3 className="font-bold text-wrap">{inc.Incidente}</h3>
                    {inc["Locación"] && (
                        <a target="_blank" href={inc["Enlace GMaps"]} className="btn btn-link text-white p-0 text-clip" rel="noreferrer">
                            <IoIosPin className="size-5" />
                            {inc["Locación"]}
                        </a>
                    )}
                    <div className="absolute bottom-1 left-2 sm:relative flex flex-row gap-1 py-3">
                        {/* {inc["Etiquetas"]} */}
                        <a className="btn btn-xs bg-white/50">Rapto</a>
                        <a className="btn btn-xs bg-white/50">Disrupcion de la paz</a>
                        <a className="btn btn-xs bg-white/50">Violencia</a>
                    </div>
                    <div className="flex flex-row gap-1">
                        <a className="btn btn-ghost btn-sm" href={`/entries/${inc.id}`}>
                            <span className="hidden sm:contents">Detalles</span>
                            <FaArrowRight className="size-4" />
                        </a>
                        <button className="btn btn-ghost btn-sm" onClick={() => onShare(inc)}>
                            <span className="hidden sm:contents">Comparte</span>
                            <FaShareAlt className="size-4" />
                        </button>
                        {inc["Fuente URL"] && (
                            <a className="btn btn-ghost btn-sm" target="_blank" href={inc["Fuente URL"]} rel="noreferrer">
                                <span className="hidden sm:contents">Ver original</span>
                                <FaExternalLinkAlt className="size-4" />
                            </a>
                        )}
                    </div>
                </div>

            </li>
        ))}
    </ul>)
}