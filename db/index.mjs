import mongoose from "mongoose";
import { mongodbUri } from "../config/index.mjs";

export class Database {
    static async connect() {
        try {
            await mongoose.connect(mongodbUri);
            console.log("Connected To MongoDB!");
        } catch (error) {
            console.log("unable to connect to MongoDB", error);
        }
     }
}