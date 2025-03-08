import { UserService } from "../services/user.service.mjs";

export class UserController{
  static async homePage(req,res){
    const userId = req.body.user;
    console.log(userId);
    const data = await UserService.getHomePageData(userId);
    return res.status(200).json(data);
  }
}