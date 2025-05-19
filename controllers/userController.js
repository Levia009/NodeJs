//Enlasamos en servicio(capa) del usuario
const user_services = require('../services/userService');


const getAllUsers = async (req, res) =>{
    const allUsers = await user_services.getAllUsers();
    if (allUsers) {
        res.status(200).send({ status:"OK", data : allUsers });
    } else {
        res.status(400).send({ status:"Failed", data : null });
    }
};

const getUserById = async (req, res) =>{
    const id = req.params.id; 
    const user = await user_services.getUserById(id);
    if (user) {
        res.status(200).send({ status:"OK", data : user });
    } else {
        res.status(400).send({ status:"Failed", data : null });
    }
};

const createUser = async (req, res) =>{
    const {body} = req; 
    const createdUser = await user_services.createUser(body.name, body.email, body.password);
    if (createdUser) {
        res.status(200).send({ status:"OK", data : createdUser });
    } else {
        res.status(400).send({ status:"Failed", data : null });
    }
};

const updateUser = async (req, res) =>{
    let id = req.params.id;
    let{name,email,password} = req.body
    const updatedUser = await user_services.updateUser(id, name, email, password);
    if (updatedUser) {
        res.status(200).send({ status:"OK", data : updatedUser });
    } else {
        res.status(400).send({ status:"Failed", data : null });
    }
};

const deleteUser = async (req, res) =>{
    let id = req.params.id;
    const deletedUser = await user_services.deleteUser(id);
    if (deletedUser) {
        res.status(200).send({ status:"OK", data : deletedUser });
    } else {
        res.status(400).send({ status:"Failed", data : null });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};