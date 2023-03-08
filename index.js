/* useRealTimeDB 2.0.1
 *
 * Author: Miguel Arias
 *
 * License: MIT
 */

import { getDatabase, ref, onValue, set } from "@firebase/database";

async function useRealTimeDB(app, path = "/") {
  // Initialize Realtime Database and get a reference to the service
  const db = getDatabase(app);

  const Ref = ref(db, path);

  const data = await query(Ref);

  const write = (changes) => {
    set(Ref, { ...data, ...changes });
  };

  return [data, write];
}

function query(ref) {
  return new Promise((res, rej) => {
    onValue(
      ref,
      (snap) => {
        res(snap.val());
      },
      (err) => rej(err)
    );
  });
}

export default useRealTimeDB;
