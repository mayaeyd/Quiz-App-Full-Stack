import User from "../models/users.model";

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
    return res.status(500).send({message: 'Server error'});
  }
};
