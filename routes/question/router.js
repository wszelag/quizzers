const { Router } = require("express");
const addQuestion = require("./addQuestion");

const router = Router();

//ADD QUESTION
router.post("/add", (req, res) => addQuestion(req, res));

module.exports = router;
