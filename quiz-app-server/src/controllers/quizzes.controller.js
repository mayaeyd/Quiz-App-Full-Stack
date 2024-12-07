import Quiz from "./../models/quiz.model.js";

export const getQuizzes = async (req, res) => {
  try {
    if (req.params.id) {
      const quiz = await Quiz.findById(req.params.id);
      if (!quiz) {
        return res.status(404).send({
          message: "Quiz not found",
        });
      }
      return res.status(200).send(quiz);
    } else {
      const quizzes = await Quiz.find();
      return res.status(200).send(quizzes);
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: "Server error",
    });
  }
};
