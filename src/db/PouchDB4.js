import PouchDb from "pouchdb";

const dbvar = new PouchDb("pouchdatabaseFile4");

dbvar.info().then((info) => {
  // eslint-disable-next-line no-console
  console.log("Show me ", info);
});

export async function insertDatabase(dataItem) {
  try {
    const responseget = await dbvar.post(dataItem);
    return responseget;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return null;
}

export function getToDatabase() {
  const value = dbvar
    .allDocs({ include_docs: true, descending: true }, (err, doc) => doc.rows)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
  return value;
}

export async function removeToDatabase(id) {
  try {
    const docs = await dbvar.get(id);
    dbvar.remove(docs);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
