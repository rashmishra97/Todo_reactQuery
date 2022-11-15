import PouchDb from "pouchdb";

const database = new PouchDb("myDatabaseuseQuery");

database.info().then((info) => {
  // eslint-disable-next-line no-console
  console.log("Show me ", info);
});

export async function insertTopouchDB(data) {
  try {
    const response = await database.post(data);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return null;
}

export function getTopouchDB() {
  const val = database
    .allDocs({ include_docs: true, descending: true }, (err, doc) => doc.rows)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
  return val;
}

export async function updateDB(id, data) {
  try {
    const doc = await database.get(id);
    const response = await database.put({
      _id: id,
      // eslint-disable-next-line no-underscore-dangle
      _rev: doc._rev,
      ...data,
    });
    console.log("response", response);
  } catch (error) {
    console.log("error is== ", error);
  }
}

export async function removeTopouchDB(id) {
  try {
    const doc = await database.get(id);
    database.remove(doc);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
