import express from "express";
import autosService from "../services/autosService.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const autos =  await autosService.obtenerAutos();
    res.json(autos);
});

export default router;