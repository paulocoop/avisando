
import base from "./base";
import {PRENSA_FIELDS, parseRow, type Prensa} from "./fields";

const table = base('Lista de Prensa');

export async function list() {
    const query = table.select({
        view: 'Grid view',
        fields: [...PRENSA_FIELDS],
    })

    const results = await query.firstPage();
    return results.map(row => parseRow<(typeof PRENSA_FIELDS)[number], Prensa>(row, PRENSA_FIELDS));
}

export async function find(id: string) {
    const result = await table.find(id)
    return result ? parseRow<(typeof PRENSA_FIELDS)[number], Prensa>(result, PRENSA_FIELDS) : null;
}