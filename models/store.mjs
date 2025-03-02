import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema ({
    name:{
        type:String,
        required: true
    }
},{timestamps:true})

export const StoreModel =mongoose.model("Store",StoreSchema);