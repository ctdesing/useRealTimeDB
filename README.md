# useRealTimeDB 2.0.0

Use Firebase Real Time Database as async hook-like function.

Latest Firebase SDK tested: March 02, 2023

## Getting Started

- ## Install @firebase/auth @firebase/app

```
npm install @firebase/auth @firebase/app
```

- ## Initialize App

```
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // `databaseURL` can be found at your database main page, and `apiKey` can be found at your project settings general information
  databaseURL: <YOUR_DATABASE_URL>,
  apiKey: <YOUR DATABASE API KEY>,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

```

- ## Authenticate user or admin for server use

```
const auth = getAuth(app)
// Example using EMAIL and PASSWORD strategy, use your prefered stragy below.
await signInWithEmailAndPassword(auth, <EMAIL>, <PASSWORD>)
```

- ## Get data and Write data.

```
import useRealTimeDB from "@ctdesing/userealtimedb"

const path = '/' // data path in the database

const [data, setData] = await useRealTimeDB(app, path)

console.log(data)

// the set function persist data not replaced.
setData({since: 0})
```
