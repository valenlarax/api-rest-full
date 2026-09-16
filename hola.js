import express from "express";
import mongoose from "mongoose";

import autosRouter from "./api/autos.js";
import usersRouter from "./api/users.js";

import "./config-dependencies.js";

const app = express();

app.use(express.json());

app.use("/autos", autosRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

await mongoose.connect("mongodb://127.0.0.1:27017/concesionaria");

console.log("Conectado a MongoDB");

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});