import { config } from "dotenv";
config ();


export const PORT = process.env.PORT || 4000;
export const mongodbUri = process.env.MONGODB_URI;