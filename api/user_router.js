import express from "express";
import { getDependency } from "../dependency.js";

const router = express.Router();

// GET /users
router.get("/", async (req, res) => {
    try {
        const userService = getDependency("userService");

        const users = await userService.getlist();

        res.json(users);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// POST /users
router.post("/", async (req, res) => {
    try {
        const userService = getDependency("userService");

        const nuevoUsuario = await userService.add(req.body);

        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// POST /users/login
router.post("/login", async (req, res) => {
    try {
        const userService = getDependency("userService");

        const { username, password } = req.body;

        const user = await userService.login(username, password);

        res.json({
            mensaje: "Login correcto",
            usuario: user
        });

    } catch (error) {
        res.status(401).json({
            error: error.message
        });
    }
});

export default router;