import { StoreModel } from "../models/store.mjs";

export class StoreRepo {

    static async createStore(name) {
        const store = await StoreModel.create({ name: name })
        if (store == undefined || store == null) {
            throw new Error("Unable to create store");
        }
        return store;
    }
    static async findByName(name) {
        const result = await StoreModel.findOne({ name: name })
        if (result == undefined || result == null) {
            return null;
        }
        return result;
    }
     static async getAllStoresForUser(userId){
        try {
            const items = await ItemModel.find({ user:userId },"store");
            console.log(items);
            
            const storeIds = [...new Set(items.map(item => item.storeId.toString()))];
            console.log(storeIds);
    
            const stores = await StoreModel.find({ _id: { $in: storeIds } });
            console.log(stores);
    
            return stores;
        } catch (error) {
            throw new Error(error.message);
        }
    };
}