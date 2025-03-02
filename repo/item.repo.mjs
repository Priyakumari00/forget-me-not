import { ItemModel } from "../models/item.mjs";
import { UserModel } from "../models/user.mjs";
import { StoreModel } from "../models/store.mjs";
import { response } from "express";

export class ItemRepo{
    static async findItems( userId, storeId){
        const result = await  ItemModel.find({user:userId, store : storeId}) 
        if(result == undefined || result == null || result.length == 0){
            return null;
        }
        return result;
    }

    static async createItem(name, user, store){
        const Item = await ItemModel.create({name:name, user:user, store: store})
        if(Item == undefined || Item == null){
            throw new Error("Unable to create Item");
        }
       return Item;
    }
}