import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("USERS FUNCIONA");
});

export default router;