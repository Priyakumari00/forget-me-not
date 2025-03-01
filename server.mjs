import express from "express";
import { PORT } from "./config/index.mjs";
import { Database } from "./db/index.mjs";

const app = express();
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
    Database.connect()
})