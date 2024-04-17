import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
      .then((res) => {
        console.log("Res is: ", res);
        setData(res.data)
      })
      .catch((error) => {
        console.log("Error is: ", error);
      })
  }, [])

  return (
    <>
      <div>Frontend is ready</div>
      DATA:{data.length}
      {
        data.map((e) =>
          <div key={e.id}>
            <h1>{e.username}</h1>
            <p>{e.salary}</p>
          </div>
        )
      }
    </>
  )
}

export default App
