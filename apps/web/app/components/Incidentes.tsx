import type { Incidente } from "airtable/incidentes"
import { FaArrowRight, FaShareAlt } from "react-icons/fa"
import { IoIosPin, IoMdDownload } from "react-icons/io"
import ClientOnly from "./ClientOnly"

type IncidentesProp = {
    incidentes: Incidente[]
}

function IncidenteDate({ fecha }: { fecha: string }) {
    const date = new Date(fecha);
    return (
        <div className="w-28 min-w-28 font-thin opacity-50 tabular-nums text-center justify-center items-center">
            <h1 className="text-5xl flex-1">{date.getDay() + 1}</h1>
            <p className="text-2xl">{date.toLocaleString('default', { month: 'long' })}</p>
            <p className="text-lg">{date.getFullYear()}</p>
        </div>
    )
}

export default function Incidentes({ incidentes }: IncidentesProp) {
    return (<ul className="flex flex-col gap-5 overflow-y-scroll overflow-x-hidden">

        {incidentes.map((inc) => (
            <li key={inc.id} className="flex flex-row border-t-2 border-b-2 border-white/50 rounded-lg p-5">
                <input type="hidden" value={JSON.stringify(inc)} />
                <ClientOnly>
                    <IncidenteDate fecha={inc.Fecha} />
                </ClientOnly>
                <div className="gap-2 h-52 sm:h-auto">
                    <h3 className="font-bold text-wrap">{inc.Incidente}</h3>
                    {inc["Locación"] && (
                        <a target="_blank" href={inc["Enlace GMaps"]} className="btn btn-link text-white p-0 truncate" rel="noreferrer">
                            <IoIosPin className="size-5" />
                            {inc["Locación"]}
                        </a>
                    )}
                    <div className="absolute bottom-1 left-2 sm:relative flex flex-row gap-1 py-3">
                        <a className="btn btn-xs bg-white/50">Rapto</a>
                        <a className="btn btn-xs bg-white/50">Disrupcion de la paz</a>
                        <a className="btn btn-xs bg-white/50">Violencia</a>
                    </div>
                    <div className="flex flex-row gap-1">
                        <a className="btn btn-ghost btn-sm" href={`/entries/${inc.id}`}>
                            <span className="hidden sm:contents">Detalles</span>
                            <FaArrowRight className="size-4" />
                        </a>
                        <a className="btn btn-ghost btn-sm" href={`/entries/${inc.id}`}>
                            <span className="hidden sm:contents">Comparte</span>
                            <FaShareAlt className="size-4" />
                        </a>
                        <a className="btn btn-ghost btn-sm" href={`/entries/${inc.id}`}>
                            <span className="hidden sm:contents">Descarga</span>
                            <IoMdDownload className="size-4" />
                        </a>
                    </div>
                </div>

            </li>
        ))}
    </ul>)
}