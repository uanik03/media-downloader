import fs from "fs"
import express from "express"
import cors from "cors"
import youtubeRoutes from "./routes/youtube.js"

const app = express()

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/youtube", youtubeRoutes);

app.listen(8080,()=>{
    console.log("server is listening on port 8080")
})