const { Router } = require("express");
const addQuestion = require("./addQuestion");
const getAllQuestions = require("./getAllQuestions");

const router = Router();

//ADD QUESTION
router.post("/add", (req, res) => addQuestion(req, res));
router.get("/question", (req, res) => getAllQuestions(req, res));

module.exports = router;
