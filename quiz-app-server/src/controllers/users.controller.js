import User from "../models/users.model.js";

export const getUsers = async (req, res) => {
  try {
    if (req.params.id) {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      return res.status(200).send(user);
    } else {
      const users = await User.find();
      return res.status(200).send(users);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

        console.log(username, email, password);
        
    const userEmail = await User.findOne({ email });
    const userName = await User.findOne({ username });
    if (userEmail) {
      return res.status(400).send({ message: "Email already in use" });
    }
    if (userName) {
      return res.status(400).send({ message: "Username already taken" });
    }

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    return res
      .status(201)
      .send({ message: "User created successfully", User: user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, {
      username,
      email,
      password,
    });

    if (!updateUser) {
      return res.status(404).send({ message: "User not found" });
    }

    return res
      .status(200)
      .send({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    return res
      .status(200)
      .send({ message: "User deleted successfully", user: deleteUser });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
};
