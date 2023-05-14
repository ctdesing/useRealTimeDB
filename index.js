/* useRealTimeDB 2.0.1
 *
 * Author: Miguel Arias
 *
 * License: MIT
 */

import { ref, onValue, set } from "@firebase/database";

async function useRealTimeDB(db, path = "/") {
  // Initialize Realtime Database and get a reference to the service

  const Ref = ref(db, path);

  const data = await query(Ref);

  const write = (changes) => {
    set(Ref, changes);
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
