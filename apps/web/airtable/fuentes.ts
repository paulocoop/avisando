
import base from "./base";
import {FUENTES_FIELDS, parseRow, type Fuente} from "./fields";

const table = base('Etiquetas');

export async function list() {
    const query = table.select({
        view: 'Grid view',
        fields: [...FUENTES_FIELDS],
    })

    const results = await query.firstPage();
    return results.map(row => parseRow<(typeof FUENTES_FIELDS)[number], Fuente>(row, FUENTES_FIELDS));
}

export async function find(id: string) {
    const result = await table.find(id)
    return result ? parseRow<(typeof FUENTES_FIELDS)[number], Fuente>(result, FUENTES_FIELDS) : null;
}

export async function findAllByIds(ids: string[]) {
    const results = await Promise.all(ids.map(id => table.find(id)));
    return results.filter(r => r).map(r => parseRow<(typeof FUENTES_FIELDS)[number], Fuente>(r, FUENTES_FIELDS));
}