import express from "express";
import autosRouter from "./api/autos.js";
import usersRouter from "./api/users.js";

const app = express();

app.use(express.json());

app.use("/api/autos", autosRouter);
app.use("/users", usersRouter);
app.get("/prueba", (req, res) => {
  res.send("LA RUTA DIRECTA FUNCIONA");
});

app.get("/", (req, res) => {
  res.send("¡Hola desde get en la API!");
});

app.post("/", (req, res) => {
  const data  = req.body;
  
  res.json({
    message: "¡datos recibidos por POST!",
    data
  });
});    

console.log("ESTOY EJECUTANDO ESTE HOLA.JS");
console.log("RUTA USERS REGISTRADA");

app.listen(3000, () => {
  console.log(" API escuchando en http://localhost:3000");
});