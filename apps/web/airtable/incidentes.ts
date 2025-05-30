import { FieldSet, Record as AirtableRecord } from "airtable";
import base from "./base";

const FIELDS = [ 'Incidente', 'Fecha', 'Breve resumen', 'Fuente Principal', 'Fuente URL', 'Fuentes por incidente', 'Media Principal', 'Media Credito', 'Enlace GMaps', 'Locación', 'Implicados / Actores', 'Etiquetas'] as const;

export type Incidente = { id: string } & {
    [K in (typeof FIELDS)[number]]: string
}

const table = base('Incidentes');

function parseRow(row: AirtableRecord<FieldSet>): Incidente {
    return FIELDS.reduce((p, f) => ({ ...p, id: row.id, [f]: row.get(f) }), {} as Incidente);
}

export async function list() {
    const query = table.select({
        view: 'Primer lanzamiento',
        fields: [...FIELDS],
        sort: [{ field: 'Fecha', direction: 'desc'}]
    })

    const results = await query.firstPage();
    return results.map(row => parseRow(row));
}

export async function find(id: string) {
    const result = await table.find(id)
    return result ? parseRow(result) : null;
}