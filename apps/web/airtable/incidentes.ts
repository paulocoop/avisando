
import base from "./base";
import {INCIDENTES_FIELDS, parseRow, type Incidente} from "./fields";


const table = base('Incidentes');



export async function list() {
    const query = table.select({
        view: 'Primer lanzamiento',
        fields: [...INCIDENTES_FIELDS],
        sort: [{ field: 'Fecha', direction: 'desc'}]
    })

    const results = await query.firstPage();
    return results.map(row => parseRow<(typeof INCIDENTES_FIELDS)[number], Incidente>(row, INCIDENTES_FIELDS));
}

export async function find(id: string) {
    const result = await table.find(id)
    return result ? parseRow<(typeof INCIDENTES_FIELDS)[number], Incidente>(result, INCIDENTES_FIELDS) : null;
}