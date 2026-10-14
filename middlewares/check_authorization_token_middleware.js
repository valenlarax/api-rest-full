import {getDependency} from "../config-dependencies.js";

export default async function checkAuthorizationTokenMiddleware(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        const schema = authHeader.split(" ")[0];
        const token = authHeader.split(" ")[1];

        if (schema.toLowerCase() !== "bearer")
            throw new Error("Esquema de autorización inválido");{
        if (!token) {
            throw new Error("Token de autorización no proporcionado");

        const sessionServices = getDependency("sessionServices");
        const session = await sessionServices.getbytoken(token);   
        if (!session) {
            throw new Error("Token de autorización inválido");
        
        req.session = session;

        console.log(session);
        next();
    }   
    