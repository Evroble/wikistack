const express = require("express");
const addPage = require("../views/addPage.js");

const router = express.Router();

router.get("/", (req, res, next)=> {
    res.send("You're on the main Wiki yo")
})

router.post("/", (req, res, next) => {
    res.json(req.body);
})

router.get("/add", (req, res, next) => {
    res.send(addPage());
})




module.exports = router;