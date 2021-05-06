import GetUserService from '../services/get-user.service';
const getUserService = new GetUserService();
exports.getUser = async (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    try {
        const user =  await getUserService.getUser(_id);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
};