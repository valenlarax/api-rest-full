import express from "express";
import { getDependency } from "../dependency.js";

const router = express.Router();

// GET /autos
router.get("/", async (req, res) => {
    try {
        const autoService = getDependency("autoService");

        const autos = await autoService.obtenerAutos();

        res.json(autos);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// GET /autos/:id
router.get("/:id", async (req, res) => {
    try {
        const autoService = getDependency("autoService");

        const auto = await autoService.obtenerAutoPorId(req.params.id);

        if (!auto) {
            return res.status(404).json({
                error: "Auto no encontrado"
            });
        }

        res.json(auto);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// POST /autos
router.post("/", async (req, res) => {
    try {
        const autoService = getDependency("autoService");

        const nuevoAuto = await autoService.crearAuto(req.body);

        res.status(201).json(nuevoAuto);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// PUT /autos/:id
router.put("/:id", async (req, res) => {
    try {
        const autoService = getDependency("autoService");

        const autoActualizado = await autoService.actualizarAuto(
            req.params.id,
            req.body
        );

        if (!autoActualizado) {
            return res.status(404).json({
                error: "Auto no encontrado"
            });
        }

        res.json(autoActualizado);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// DELETE /autos/:id
router.delete("/:id", async (req, res) => {
    try {
        const autoService = getDependency("autoService");

        const autoEliminado = await autoService.eliminarAuto(req.params.id);

        if (!autoEliminado) {
            return res.status(404).json({
                error: "Auto no encontrado"
            });
        }

        res.json({
            mensaje: "Auto eliminado correctamente"
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

export default router;