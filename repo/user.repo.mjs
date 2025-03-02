import { UserModel } from "../models/user.mjs";

export class UserRepo{
    static async findByEmail(email){
        const result = await UserModel.findOne({email:email})
        if(result == undefined || result == null){
            return null;
        }
        return result;
    }

    static async createUser(name, email, password, phone){
        const user = await UserModel.create({name:name,email:email,password:password, phone: phone})
        if(user == undefined || user == null){
            throw new Error("Unable to create user");
        }
       return user;
    }
}

