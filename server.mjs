import express from "express";
import { PORT } from "./config/index.mjs";
import { Database } from "./db/index.mjs";
import userRouter from "./routes/user.mjs";

const app = express();
app.use(express.json());
app.use (express.urlencoded({extended:false}));
app.use("/api/users", userRouter);
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
    Database.connect()
})