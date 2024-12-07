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

export const createQuiz = async (req, res) => {
  try {
    const { category, correctAnswer, incorrectAnswers, question, difficulty } =
      req.body;

    console.log(
      category,
      correctAnswer,
      incorrectAnswers,
      question,
      difficulty
    );

    const quizQuestion = await Quiz.findOne({ question });
    if (quizQuestion) {
      return res.status(400).send({ message: "Question already added" });
    }

    if (incorrectAnswers.length !== 3) {
      return res
        .status(400)
        .send({ message: "Incorrect answers must contain exactly 3 items." });
    }

    const quiz = new Quiz({
      category,
      correctAnswer,
      incorrectAnswers,
      question,
      difficulty,
    });

    await quiz.save();

    return res
      .status(201)
      .send({ message: "Quiz created successfully", Quiz: quiz });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
};

export const updateQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, correctAnswer, incorrectAnswers, question, difficulty } =
      req.body;

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      id,
      {
        category,
        correctAnswer,
        incorrectAnswers,
        question,
        difficulty,
      },
      { new: true }
    );

    if (!updatedQuiz) {
      return res.status(404).send({ message: "Quiz not found" });
    }

    return res
      .status(200)
      .send({ message: "Quiz updated successfully", quiz: updatedQuiz });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
};

export const deleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedQuiz = await Quiz.findByIdAndDelete(id);

    if (!deletedQuiz) {
      return res.status(404).send({ message: "Quiz not found" });
    }

    return res
      .status(200)
      .send({ message: "Quiz deleted successfully", quiz: deletedQuiz });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
};
