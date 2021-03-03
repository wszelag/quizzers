const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("question", QuestionSchema);
