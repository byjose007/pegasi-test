import User from "../models/user.model";

export default class GetUserService {
    constructor() {}
    async getUser(_id) {
        try {
            const user = await User.findOne({
                _id
            });

            return user;
        } catch (error) {
            throw error;
        }
    }
}