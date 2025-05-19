const { where } = require('sequelize');
const db = require('../models');

const getAllUsers = async () => {
    try {
        const users = await db.User.findAll();
        return users;
    } catch (error) {
        throw new Error("Error al traer los usuarios" + error.message);
    }
}

const getUserById = async (id) => {
    try {
        const user = await db.User.findByPk(id);
        return user;
    } catch (error) {
        throw new Error("Error al traer el usuarios" + error.message);
    }
}

const createUser = async (name, email, password) => {
    try {
        const createdUser = await db.User.create({name,email,password});
        return createdUser;
    } catch (error) {
        throw new Error("Error al crea el usuarios" + error.message);
    }
}

const updateUser = async (id,name,email,password) => {
    try {
        let updatedUser = await db.User.update({ name,email,password}, { where:
             {  id,
            }
        });
        return updatedUser;
    } catch (error) {
        return error.message || "El usuario no pudo ser actualizado";
    }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.User.destroy({
      where: {
        id,
      }
    });
    return deletedUser;
  } catch (error) {
    return error.message || "El usuario no pudo ser eliminado";
  }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};