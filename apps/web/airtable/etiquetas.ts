
import base from "./base";
import {ETIQUETAS_FIELDS, parseRow, type Etiqueta} from "./fields";

const table = base('Etiquetas');

export async function list() {
    const query = table.select({
        view: 'Grid view',
        fields: [...ETIQUETAS_FIELDS],
    })

    const results = await query.firstPage();
    return results.map(row => parseRow<(typeof ETIQUETAS_FIELDS)[number], Etiqueta>(row, ETIQUETAS_FIELDS));
}

export async function find(id: string) {
    const result = await table.find(id)
    return result ? parseRow<(typeof ETIQUETAS_FIELDS)[number], Etiqueta>(result, ETIQUETAS_FIELDS) : null;
}