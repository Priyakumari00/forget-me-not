import { UserRepo } from "../repo/user.repo.mjs";

export class UserService{
    static async getHomePageData(userId){
        const user = await UserRepo.findById(userId);
        return user;
    }
}