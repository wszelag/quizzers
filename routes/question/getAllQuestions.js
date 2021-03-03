const Question = require("../../models/Question");

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();

    res.status(200).json({
      questions
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: "Server error"
    });
  }
};

module.exports = getAllQuestions;
