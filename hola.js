import express from "express";
import autosRouter from "./api/autos.js";

const app = express();

app.use(express.json());
app.use("/api/autos", autosRouter);

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


app.listen(3000, () => {
  console.log(" API escuchando en http://localhost:3000");
});