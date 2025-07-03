import type { Etiqueta } from "airtable/fields"
import { createContext, useContext } from "react"

type EtiquetasContextProps = {
    etiquetas: Etiqueta[]
}

export const EtiquetasContext = createContext<EtiquetasContextProps>({ etiquetas: [] });

export function Etiqueta({ id }: { id: string }) {
    const { etiquetas } = useContext(EtiquetasContext);
    const { Nombre: nombre } = etiquetas && etiquetas.length > 0 ? etiquetas.find(e => e.id === id ) ?? { Nombre: ''} : { Nombre: ''};
    return nombre && (
        <div className="badge badge-outline rounded-sm">{nombre}</div>
    )
}