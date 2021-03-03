const Question = require("../../models/Question");

const addQuestion = async (req, res) => {
  const { question, wrongAnswers, goodAnswer, category } = req.body;
  try {
    const questionObj = new Question({
      question,
      category,
      wrongAnswers,
      goodAnswer
    });

    await questionObj.save();

    res.status(200).json({
      questionObj
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: "Server error"
    });
  }
};

module.exports = addQuestion;
