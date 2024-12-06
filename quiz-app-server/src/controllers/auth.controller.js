import User from "../models/users.model";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

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

    const token = await jwt.sign({userId: user.id}, process.env.SECRET_KEY);

    return res.status(200).send(user, token);
    
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username && !email && !password) {
      return res.status(400).send({
        message: "Credentials are required",
      });
    }

    const userEmail = await User.findOne({ username });
    const userName = await User.findOne({ email });

    if (userEmail) {
      return res.status(400).send({
        message: "Email already in use",
      });
    }
    if (userName) {
      return res.status(400).send({
        message: "Username already taken",
      });
    }

    const hashedPassword = await bcrypt(password, 10);

    const user = await User.create({
      username,
      email,
      hashedPassword,
    });

    return res.status(201).send({
        message:"User created successfully",
        user,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
        message:"Server error"
    });
  }
};
