import { initializeApp } from "@firebase/app";
import { getDatabase, ref, onValue, set } from "@firebase/database";

async function useSimpleStorage(databaseURL, path = "/") {
  // TODO: Replace the following with your app's Firebase project configuration
  // See: https://firebase.google.com/docs/web/learn-more#config-object
  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

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

export default useSimpleStorage;
