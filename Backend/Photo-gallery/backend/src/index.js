import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js"
import { Image } from "./models/image.model.js"

dotenv.config({
    path:"./.env"
})

connectDB()
.then(() => {

    app.get("/", (req, res)=>{
        res.send(`<h1>Server is running at http://localhost:${process.env.PORT}</h1>`)
    })

    app.get("/image", async(req, res)=>{
        const images = await Image.find();
        // const data={
        //     name:"sonu mondal"
        // }
        res.send(images)
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at http://localhost:${process.env.PORT} : ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})