import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    incorrectAnswers: {
      type: [String],
      required: true,
    },
    question: {
      type: String,
      required: true,
      unique: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
