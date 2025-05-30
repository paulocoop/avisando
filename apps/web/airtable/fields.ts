import { type FieldSet, type Record as AirtableRecord } from "airtable";

export const INCIDENTES_FIELDS = [ 'Incidente', 'Fecha', 'Breve resumen', 'Fuente Principal', 'Fuente URL', 'Fuentes por incidente', 'Media Principal', 'Media Credito', 'Enlace GMaps', 'Locación', 'Implicados / Actores', 'Etiquetas'] as const;
export const PRENSA_FIELDS = ['Nombre', 'Principal (Nombre)', 'Instagram', 'YouTube', 'WWW', 'Etiquetas de la prensa'] as const;

export type BaseRecord<FIELDS extends (readonly string[])[number]> =  { id: string } & {
    [K in FIELDS]: string
}

export type Incidente = BaseRecord<(typeof INCIDENTES_FIELDS)[number]>
export type Prensa = BaseRecord<(typeof PRENSA_FIELDS)[number]>

export function parseRow<F extends (readonly string[])[number], R extends BaseRecord<F>>(row: AirtableRecord<FieldSet>, fields: readonly string[]): R {
    return fields.reduce((p, f) => ({ ...p, id: row.id, [f]: row.get(f) }), {} as R);
}