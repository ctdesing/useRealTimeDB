# useRealTimeDB 2.0.1

Use Firebase Real Time Database as async hook-like function.

Latest Firebase JS SDK tested: 9.17.2 - March 02, 2023

<br>

## Getting Started

### 1- Install packages

```
npm install firebase
```

### 2- Import packages

```
import useRealTimeDB from "@ctdesing/userealtimedb"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase } from "@firebase/database";

```

### 3- Initialize App

```
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // `databaseURL` can be found at your database main page, and `apiKey` can be found at your project settings general information
  databaseURL: <YOUR_DATABASE_URL>,
  apiKey: <YOUR PROJECT API KEY>,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

```

### 4- Authenticate user or admin for server use

```
const auth = getAuth(app)
// Example using EMAIL and PASSWORD strategy, use your prefered stragy below.
await signInWithEmailAndPassword(auth, <EMAIL>, <PASSWORD>)
```

### 5- Get data and Write data.

```
// data path in the database
const path = '/'

const db = getDatabase(app);

const [data, setData] = await useRealTimeDB(db, path)

console.log(data)

setData({ key:value })
```
