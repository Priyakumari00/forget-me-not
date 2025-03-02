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
}