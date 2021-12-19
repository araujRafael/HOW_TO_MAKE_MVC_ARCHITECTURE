const { Users } = require("../model/user.schemas");
const { v4: uuid } = require("uuid");

class IndexController {
  // GET
  async get(req, res) {
    const UserCollection = Users.db.collection("users");
    const usersArr = await UserCollection.find({}).toArray();
    if (!usersArr) {
      res.status(500).json({
        error: "No users yet!",
      });
      return;
    }
    res.status(200).json(usersArr);
  }
  async getId(req, res) {
    const { id } = req.params;
    const usersId = await Users.findOne({ uuid: id }).exec();
    // console.log(usersId)
    if (!usersId) {
      res.status(500).json({
        error: "User not found",
      });
      return;
    }
    res.status(200).json(usersId);
  }
  // POST
  post(req, res) {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      res.status(500).json({
        error: "Empety filds!",
      });
      return;
    }
    Users.create({
      uuid: uuid(),
      email,
      name,
      password,
    });
    res.status(200).json({
      message: "User is been created!",
    });
  }
  // PUT
  put(req, res) {}
  // DELETE
  delete(req, res) {}
}
module.exports = { IndexController };
