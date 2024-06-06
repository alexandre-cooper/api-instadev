const Users = require("../models/Users");

class UserController {
  async createUser(req, res) {
    const verifyUser = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (verifyUser) {
      return res.status(400).json({ message: "User already exits" });
    }
    const user = await Users.create(req.body);
    if (!user) {
      return res.status(400).json({ message: "Failed to create" });
    }
    return res.status(200).json({ message: "User created" });
  }
  async listAllUser(req, res) {
    const allUsers = await Users.findAll();
    return res.send({ allUsers });
  }
}

module.exports = new UserController();
