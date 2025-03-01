import express from "express";
import { PORT } from "./config/index.mjs";

const app = express();
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})