import { connect } from "mongoose";

const connectToDB = async () => {
  try {
    await connect("mongodb://localhost:27017/quizappdb");
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToDB;
