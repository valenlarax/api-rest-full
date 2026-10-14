import {getDependency} from "../dependency.js";

export class SessionServices {
    constructor() {
        this.sessionRepo = getDependency("sessionRepo");
    }

createtoken() {
    const array = new Uint8Array(32); 
    cripto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, "0")).join("");  

}

async createforuser(user) {
    var authToken = this.createtoken();
}while