import { getDependency } from "../dependency.js";

export class UserService {

    constructor() {
        this.userRepository = getDependency("userRepository");
    }

    async getlist() {
        return await this.userRepository.find();
    }

    async add(user) {

        if (!user.username)
            throw new Error("el nombre de usuario es obligatorio");

        if (!user.email)
            throw new Error("el email es obligatorio");

        if (!user.password)
            throw new Error("la contraseña es obligatoria");

        const existingUser = await this.userRepository.find({
            username: user.username
        });

        if (existingUser.length)
            throw new Error("el nombre de usuario ya existe");

        return await this.userRepository.create(user);
    }

    async login(username, password) {

        const users = await this.userRepository.find({
            username: username
        });

        if (users.length === 0) {
            throw new Error("usuario o contraseña incorrectos");
        }

        const user = users[0];

        if (user.password !== password) {
            throw new Error("usuario o contraseña incorrectos");
        }

        return user;
    }
}