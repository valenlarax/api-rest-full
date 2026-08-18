import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    const autos =  await autosService.obtenerAutos();
    res.json(autos);
});

export default router;