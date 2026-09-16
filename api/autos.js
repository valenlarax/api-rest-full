import express from "express";
import autosService from "../services/autosService.js";

const router = express.Router();


router.get("/", async (req, res) => {
    const autos = await autosService.obtenerAutos();

    res.json(autos);
});


router.post("/", async (req, res) => {
    const nuevoAuto = await autosService.crearAuto(req.body);

    res.status(201).json(nuevoAuto);
});


router.get("/:id", async (req, res) => {
    const auto = await autosService.obtenerAutoPorId(req.params.id);

    if (!auto) {
        return res.status(404).json({
            mensaje: "Auto no encontrado"
        });
    }

    res.json(auto);
});


router.put("/:id", async (req, res) => {
    const auto = await autosService.actualizarAuto(
        req.params.id,
        req.body
    );

    if (!auto) {
        return res.status(404).json({
            mensaje: "Auto no encontrado"
        });
    }

    res.json(auto);
});


router.delete("/:id", async (req, res) => {
    const auto = await autosService.eliminarAuto(req.params.id);

    if (!auto) {
        return res.status(404).json({
            mensaje: "Auto no encontrado"
        });
    }

    res.json({
        mensaje: "Auto eliminado correctamente",
        auto: auto
    });
});

export default router;