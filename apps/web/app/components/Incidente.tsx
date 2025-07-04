import { Incidente, Prensa } from "airtable/fields"
import { Etiqueta, useEtiquetaNombre } from "./Etiqueta"
import { FaCalendar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

type IncidenteCardProp = {
    incidente: Incidente
}

export function IncidenteCard({ incidente }: IncidenteCardProp) {
    const etiquetas: string[] = Array.from(incidente?.Etiquetas ?? "") ?? [];
    const principalNombre = useEtiquetaNombre(etiquetas[0] ?? "");
    return (
        <div className="card w-full md:w-80 min-h-48 max-h-96 bg-black shadow-lg rounded-lg">
            <div className="card-body text-white">
                <a href={`/entries/${incidente.id}`} className="space-y-5">
                    {principalNombre && (<div className="badge bg-transparent border-none text-accent font-bold px-0">{principalNombre}</div>)}
                    <div className="card-title font-thin">{incidente.Incidente}</div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {incidente.Fecha && (
                            <li >
                                <FaCalendar className="size-4 me-2 inline-block" />
                                <span className="capitalize">{new Date(incidente.Fecha).toLocaleString('default', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </li>
                        )}
                        {incidente.Locación && (
                            <li >
                                <FaLocationPin className="size-4 me-2 inline-block" />
                                <span className="capitalize">{incidente.Locación}</span>
                            </li>
                        )}
                    </ul>
                    {incidente?.Etiquetas && (
                        <div className="flex flex-row flex-wrap  gap-2 py-3">
                            {Array.from(incidente?.Etiquetas).map(e => (
                                <Etiqueta key={e} id={e} />
                            ))}
                        </div>
                    )}
                </a>

            </div>
        </div>
    )
}