# useRealTimeDatabase

Use Firebase Real Time Database as async hook-like function.

## Getting Started

```
import useRealTimeDatabase from "@ctdesing/useRealTimeDatabase"

// Replace DATABASE_NAME with your db name and ID_TOKEN with id from the firebase authentication credential
const url = "https://<DATABASE_NAME?.firebaseio.com?auth=<ID_TOKEN>""

const [data, setData] = useRealTimeDatabase(url, '/')

console.log(data)

setData({since: 0})
```
