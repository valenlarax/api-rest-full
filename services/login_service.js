import {getDependency} from "../dependency.js";

export class LoginService {
    constructor() {
        this.userService = getDependency("userService");
        this.sessionServices = getDependency("sessionServices");
    }
}
async login(data) {
    if (!data.username || !data.password) 
        throw new Error("el nombre de usuario es obligatorio");
    
    if (!data.password) 
        throw new Error("la contraseña es obligatoria");

    const user = await this.userService.getbyusername(data.username);
   
    if (!user) 
        throw new Error("usuario o contraseña incorrectos");

    if(!isMatch)
        throw new Error("usuario o contraseña incorrectos");
    
    const session = await this.sessionServices.createforuser(user);

    return{
        authToken: session.authToken,
        username: session.username,
        role: session.role
    }

    }