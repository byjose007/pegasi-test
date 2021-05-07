import CreateUserService from '../services/create-user.service';
const createUserService = new CreateUserService();


exports.saveUser = async (req, res) => {

    const userDTO = req.body;
    try {
        const savedUser = await createUserService.createUser(userDTO);
        res.status(201).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
        });
    }
};

