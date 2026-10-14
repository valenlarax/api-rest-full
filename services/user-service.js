import { getDependency } from "../dependency.js";
import bcrypt from "bcrypt";

export class UserService {

    constructor() {
        this.userRepository = getDependency("userRepository");
    }

    async getlist() {
        return await this.userRepository.find();
    }
async getbyusername(username) {
return await this.userRepository.findOne({ username });
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

        user.password = await bcrypt.hash(user.password, 10);
        return  this.userRepository.create(user);
    }
}