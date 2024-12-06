import User from "../models/users.model";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send({
        message: "Invalid credentials",
      });
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      return res.status(400).send({
        message: "Invalid credentials",
      });
    }

    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};
