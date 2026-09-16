import User from "../mongo-db/user_mongo.js";

const find = async (filtro = {}) => {
    return await User.find(filtro);
};

const create = async (user) => {
    const nuevoUsuario = new User(user);
    return await nuevoUsuario.save();
};

export default {
    find,
    create
};