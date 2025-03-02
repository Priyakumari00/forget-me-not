
import mongoose from "mongoose";


const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

        
    },

    store : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true,
    },
},{timestamps:true})

export const ItemModel = mongoose.model("Item",ItemSchema);