# change the type common to module so it can uses import. To get this got to package.json file and write "type": "module"

# How to connect frontend and backend
1. install axios as npm i axiso and import it 

2. write it on vite.config.js which is on frontend folder

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"http://localhost:4000"
    }
  },
  plugins: [react()],
})

whereever /api is come it will automatically inject http://localhost:4000 behing /api

3. request to server
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

