import airtable from 'airtable';
airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY});

const base = airtable.base(process.env.AIRTABLE_BASE_ID)
export default base;