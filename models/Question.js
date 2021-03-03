const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  wrongAnswers: {
    type: Array,
    required: true
  },
  goodAnswer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("question", QuestionSchema);
